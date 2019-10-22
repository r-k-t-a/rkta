/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, FormEvent } from 'react';

import { InputBase } from './InputBase';
import { useProviderContext } from '../Provider';
import { reEmit } from '../util/reEmit';

import { Props } from './Input.type';

export const Input = ({
  append,
  caption,
  defaultValue = '',
  fancy,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  prepend,
  value,
  ...rest
}: Props): JSX.Element => {
  const isControlled = typeof value === 'string';
  const [ownValue, setOwnValue] = useState(isControlled ? value : defaultValue);
  const [hasFocus, setHasFocus] = useState(false);

  const currentValue = isControlled ? value : ownValue;
  const active = hasFocus || !!(currentValue || placeholder);

  const { applyStyles } = useProviderContext();
  const wrapperProps = { active, element: 'label', fancy, transparent: fancy, ...rest };
  const [{ css, ...inputProps }, Element] = applyStyles(wrapperProps, 'Input', 'Paper');

  const handleBlur = (event: FormEvent<HTMLInputElement>): void => {
    setHasFocus(false);
    reEmit(event, onBlur);
  };
  const handleChange = (event: FormEvent<HTMLInputElement>): void => {
    setOwnValue(event.currentTarget.value);
    reEmit(event, onChange);
  };
  const handleFocus = (event: FormEvent<HTMLInputElement>): void => {
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
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        placeholder={placeholder}
        value={currentValue}
      />
      {append}
    </Element>
  );
};
