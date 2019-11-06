/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, FormEvent, SFC } from 'react';

import { InputBase } from '../InputBase';
import { useProviderContext } from '../Provider';
import { reEmit } from '../util/reEmit';

import { Props } from './Input.type';

export const Input: SFC<Props> = ({
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
}: Props): JSX.Element => {
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

  const handleBlur = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setHasFocus(false);
    reEmit(event, onBlur);
  };
  const handleChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setOwnValue(event.currentTarget.value);
    reEmit(event, onChange);
  };
  const handleFocus = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
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
        value={currentValue}
      />
      {append}
    </Element>
  );
};
