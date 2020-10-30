/* eslint-disable react/jsx-fragments */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment, useRef, FocusEvent, FormEvent, forwardRef, FC } from 'react';

import { InputBase } from '../InputBase';
import { useProviderContext } from '../Provider';
import { FloatingArea } from '../FloatingArea';
import { Media } from '../Media';
import { reEmit } from '../util';

import { dispatchDomEvent } from '../util/dispatchDomEvent';
import { InputProps } from './Input.type';
import { InputElement, Value } from '../InputBase/InputBase.type';
import { useInput } from './useInput';

/**
 * ```js
 *
 * import { Input } from '@rkta/ui';
 *
 * <Input caption="Text Input" />
 * ```
 */
export const Input: FC<Omit<InputProps, 'ref'>> = forwardRef<InputElement, InputProps>(
  (
    {
      append,
      caption,
      children,
      className,
      defaultValue = '',
      disabled,
      fancy,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      prepend,
      readOnly,
      value,
      ...rest
    },
    ref,
  ): JSX.Element => {
    const isControlled = typeof value === 'string';
    const {
      hasFocus,
      inputElement,
      lockSuggest,
      localValue,
      removeFocus,
      setFocus,
      setLocalValue,
      suggestIsVisible,
      unlockSuggest,
    } = useInput(isControlled ? value : defaultValue);

    const boxRef = useRef<HTMLElement>(null);

    const currentValue = isControlled ? value : localValue;
    const active = (!readOnly && hasFocus) || !!(currentValue || placeholder);

    const { applyStyles } = useProviderContext();
    const wrapperProps = {
      active,
      disabled,
      element: 'label',
      fancy,
      transparent: fancy,
      ...rest,
    };
    const [{ css, ...inputProps }, Element] = applyStyles(wrapperProps, 'Input', 'Paper');

    const handleBlur = (event: FocusEvent<InputElement>): void => {
      removeFocus();
      reEmit(event, onBlur);
    };
    const handleChange = (event: FormEvent<InputElement>): void => {
      setLocalValue(event.currentTarget.value);
      reEmit(event, onChange);
    };
    const handleFocus = (event: FocusEvent<InputElement>): void => {
      setFocus(event.nativeEvent.target as Element);
      reEmit(event, onFocus);
    };
    function handleSuggest(nextValue?: Value): void {
      setLocalValue(nextValue);
      unlockSuggest();
      if (inputElement) dispatchDomEvent(inputElement, 'change', { value: nextValue });
    }
    const suggest =
      boxRef.current &&
      typeof children === 'function' &&
      children({ value: currentValue, setValue: handleSuggest });
    return (
      <Fragment>
        <Element className={className} css={css} ref={boxRef}>
          {prepend}
          <InputBase
            {...inputProps}
            active={active}
            caption={caption}
            disabled={disabled}
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            placeholder={placeholder}
            readOnly={readOnly}
            ref={ref}
            value={currentValue}
          />
          {append}
        </Element>
        {suggest && (
          <Fragment>
            {suggestIsVisible && (
              <Media phone>
                <div onFocus={lockSuggest} onPointerDown={lockSuggest}>
                  {suggest}
                </div>
              </Media>
            )}
            <Media atLeastTablet>
              <FloatingArea
                active={suggestIsVisible}
                align="bottom-left"
                blockLevel
                onClose={unlockSuggest}
                onFocus={lockSuggest}
                onPointerDown={lockSuggest}
                producer={boxRef.current as HTMLElement}
              >
                {suggest}
              </FloatingArea>
            </Media>
          </Fragment>
        )}
      </Fragment>
    );
  },
);
