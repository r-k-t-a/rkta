/** @jsx jsx */
/* eslint-disable react/jsx-fragments */

import { Fragment, useState, forwardRef, useEffect, useRef } from 'react';
import { jsx } from '@emotion/core';
import { Addon } from '../Addon';
import { Svg } from '../Svg';
import { useProviderContext } from '../Provider';
import { SelectProps, SelectState } from './Select.type';
import { Media } from '../Media';
import { Drawer } from '../Drawer';
import { Paper } from '../Paper';
import { FloatingArea } from '../FloatingArea';

/**
 * ```js
 * import { Select } from '@rkta/ui';
 * 
 * <Select caption="Normal">
    {([isSelected, make]) => (
      ...
    )}
  </Select>
  ```
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const or = (...args: any[]) => args.find((arg) => typeof arg !== 'undefined');

export const Select = forwardRef<HTMLInputElement, SelectProps>(
  (
    {
      caption,
      children,
      defaultValue,
      drawerProps,
      floatingAreaProps,
      floatingAreaContentProps,
      formatValue,
      prepend,
      value,
      ...rest
    },
    ref,
  ) => {
    const wrapperRef = useRef();
    const { applyStyles } = useProviderContext();
    const [state, setState] = useState<SelectState>({
      isExpanded: false,
      value: or(value, defaultValue),
    });
    const currentValue = or(value, state.value);
    const captionIsActive = !!currentValue;
    const displayValue = formatValue ? formatValue(currentValue) : currentValue;
    const [{ css: elementCss, ...baseProps }, Wrapper] = applyStyles(
      { active: state.isExpanded, ...rest, element: 'label' },
      'Select',
      'ListItem',
      'Paper',
    );
    const [{ css: baseCss }, Base] = applyStyles(
      { active: captionIsActive, main: true, normal: true, ...baseProps },
      'InputBase',
      'Addon',
    );
    function patchState(nextState: SelectState): void {
      setState((prevState) => ({ ...prevState, ...nextState }));
    }
    function handleClose(): void {
      if (state.isExpanded) patchState({ isExpanded: false });
    }
    function handleOpen(): void {
      if (!state.isExpanded) patchState({ isExpanded: true });
    }
    const isSelected = (option: SelectProps['value']): boolean => option === currentValue;
    const makeSelectHandler = (nextValue: SelectState['value']) => () => {
      patchState({ value: nextValue, isExpanded: false });
    };
    const content =
      typeof children === 'function' ? children([isSelected, makeSelectHandler]) : children;

    useEffect(() => {
      patchState({ isExpanded: false });
    }, [currentValue]);

    return (
      <Fragment>
        <Wrapper css={elementCss} onClick={handleOpen} onInput={handleClose} ref={wrapperRef}>
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
          <input ref={ref} type="hidden" value={currentValue} />
        </Wrapper>
        <Media phone>
          <Drawer align="bottom" {...drawerProps} open={state.isExpanded} onClose={handleClose}>
            {content}
          </Drawer>
        </Media>
        <Media atLeastTablet>
          <FloatingArea
            align="bottom-left"
            blockLevel
            {...floatingAreaProps}
            active={state.isExpanded}
            onClose={handleClose}
            producer={wrapperRef.current}
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
