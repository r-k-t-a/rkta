/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, FormEvent, forwardRef } from 'react';

import { InputBase } from '../InputBase';
import { useProviderContext } from '../Provider';
import { reEmit } from '../util/reEmit';

import { Props } from './Input.type';
import { InputElement } from '../InputBase/InputBase.type';

export const Input = forwardRef<InputElement, Props>(
  (
    {
      append,
      caption,
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
    }: Props,
    ref,
  ): JSX.Element => {
    const isControlled = typeof value === 'string';
    const [ownValue, setOwnValue] = useState(isControlled ? value : defaultValue);
    const [hasFocus, setHasFocus] = useState(false);

    const currentValue = isControlled ? value : ownValue;
    const active = hasFocus || !!(currentValue || placeholder);

    const { applyStyles } = useProviderContext();
    const wrapperProps = {
      active,
      disabled,
      element: 'label',
      fancy,
      readOnly,
      transparent: fancy,
      ...rest,
    };
    const [{ css, ...inputProps }, Element] = applyStyles(wrapperProps, 'Input', 'Paper');

    const handleBlur = (event: FormEvent<InputElement>): void => {
      setHasFocus(false);
      reEmit(event, onBlur);
    };
    const handleChange = (event: FormEvent<InputElement>): void => {
      setOwnValue(event.currentTarget.value);
      reEmit(event, onChange);
    };
    const handleFocus = (event: FormEvent<InputElement>): void => {
      setHasFocus(true);
      reEmit(event, onFocus);
    };
    return (
      <Element css={css}>
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
    );
  },
);
