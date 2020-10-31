/** @jsx jsx */
/* eslint-disable react/jsx-fragments */

import { Fragment, useState, forwardRef, useEffect, useRef, RefObject } from 'react';
import { jsx } from '@emotion/core';

import { Addon } from '../Addon';
import { Svg } from '../Svg';
import { useProviderContext } from '../Provider';
import { SelectProps, SelectState } from './Select.type';
import { Media } from '../Media';
import { Drawer } from '../Drawer';
import { Paper } from '../Paper';
import { FloatingArea } from '../FloatingArea';
import { takeDefined } from '../util';

/**
 * ```js
 * import { Select } from '@rkta/ui';
 * 
 * <Select caption="Normal">
    {([isSelected, makeSelectHandler]) => (
      ...
    )}
  </Select>
  ```
 */

export const Select = forwardRef<HTMLElement, SelectProps>(
  (
    {
      caption,
      children,
      className,
      defaultValue,
      drawerProps,
      floatingAreaProps,
      floatingAreaContentProps,
      formatValue,
      name,
      onChange,
      onOpen,
      onClose,
      open,
      prepend,
      value,
      ...rest
    },
    ref,
  ) => {
    const defaultRef = useRef<HTMLElement>(null);
    const wrapperRef = ref || defaultRef;
    const { applyStyles } = useProviderContext();
    const [state, setState] = useState<SelectState>({
      isOpen: false,
      value: takeDefined(value, defaultValue),
    });
    const currentValue = takeDefined(value, state.value);
    const isOpen = takeDefined(open, state.isOpen) || false;
    const captionIsActive = !!currentValue;
    const displayValue = formatValue ? formatValue(currentValue) : currentValue;
    const [{ css: elementCss, ...baseProps }, Wrapper] = applyStyles(
      { active: isOpen, ...rest, element: 'label' },
      'Select',
      'Paper',
    );
    const [{ css: baseCss, wrapperProps }, Base] = applyStyles(
      { active: captionIsActive, main: true, normal: true, ...baseProps },
      'InputBase',
      'Addon',
    );
    function patchState(nextState: SelectState): void {
      setState((prevState) => ({ ...prevState, ...nextState }));
    }
    function handleClose(): void {
      patchState({ isOpen: false });
      if (onClose) onClose();
    }
    function handleOpen(): void {
      patchState({ isOpen: true });
      if (onOpen) onOpen();
    }
    const content =
      typeof children === 'function'
        ? children([
            (option: SelectProps['value']): boolean => option === currentValue,
            (nextValue: SelectState['value']) => () => {
              patchState({ value: nextValue, isOpen: false });
              if (onChange) onChange(nextValue);
            },
          ])
        : children;

    useEffect(handleClose, [currentValue]);

    return (
      <Fragment>
        <Wrapper
          className={className}
          css={elementCss}
          {...wrapperProps}
          onClick={handleOpen}
          onInput={handleClose}
          ref={wrapperRef}
        >
          {prepend}
          <Base css={baseCss}>
            {caption && <span className="caption">{caption}</span>}
            {currentValue && <span className="value">{displayValue}</span>}
          </Base>
          <Addon>
            <Svg block className="chevron" size={20}>
              <path d="M13.418,7.859c0.271-0.268,0.709-0.268,0.978,0c0.27,0.268,0.272,0.701,0,0.969l-3.908,3.83c-0.27,0.268-0.707,0.268-0.979,0l-3.908-3.83c-0.27-0.267-0.27-0.701,0-0.969c0.271-0.268,0.709-0.268,0.978,0L10,11L13.418,7.859z" />
            </Svg>
          </Addon>
          <input name={name} type="hidden" value={currentValue || ''} />
        </Wrapper>
        <Media phone>
          <Drawer align="bottom" {...drawerProps} open={isOpen} onClose={handleClose}>
            {content}
          </Drawer>
        </Media>
        <Media atLeastTablet>
          <FloatingArea
            align="bottom-left"
            blockLevel
            {...floatingAreaProps}
            active={isOpen}
            onClose={handleClose}
            producer={wrapperRef as RefObject<HTMLElement>}
          >
            <Paper rize={6} {...floatingAreaContentProps}>
              {content}
            </Paper>
          </FloatingArea>
        </Media>
      </Fragment>
    );
  },
);
