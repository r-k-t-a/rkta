import React, { ReactNode, FC, useRef, forwardRef, RefObject } from 'react';

import { Context } from './Context';
import { useForm, Props as HookProps } from './useForm/useForm';

interface Props extends HookProps {
  children: ReactNode;
}

export const Form: FC<Props> = forwardRef<HTMLFormElement, Props>(
  (
    {
      children,
      live,
      onBlur,
      onChange,
      onSubmit,
      onFormBlur,
      onFormChange,
      onFormSubmit,
      ...rest
    }: Props,
    externalRef,
  ): JSX.Element => {
    const internalRef = useRef(null);
    const ref = (externalRef || internalRef) as RefObject<HTMLFormElement>;
    const { errors, handleBlur, handleChange, handleSubmit } = useForm(ref, {
      onBlur,
      live,
      onChange,
      onSubmit,
      onFormBlur,
      onFormChange,
      onFormSubmit,
    });
    return (
      <form {...rest} onChange={handleChange} onBlur={handleBlur} onSubmit={handleSubmit} ref={ref}>
        <Context.Provider value={{ errors }}>{children}</Context.Provider>
      </form>
    );
  },
);
