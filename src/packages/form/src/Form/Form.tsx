import React, { ReactNode, forwardRef, DetailedHTMLProps, FormHTMLAttributes } from 'react';

import { Context } from './Context';
import { useForm, Props as HookProps } from './useForm/useForm';

type HTMLFormProps = DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> &
  HookProps;

type Props = HTMLFormProps & {
  children: ReactNode;
};

export const Form = forwardRef<HTMLFormElement, Props>(
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
      validate,
      ...rest
    },
    ref,
  ) => {
    const { errors, handleBlur, handleChange, handleSubmit } = useForm({
      onBlur,
      live,
      onChange,
      onSubmit,
      onFormBlur,
      onFormChange,
      onFormSubmit,
      validate,
    });
    return (
      <form {...rest} onChange={handleChange} onBlur={handleBlur} onSubmit={handleSubmit} ref={ref}>
        <Context.Provider value={{ errors }}>{children}</Context.Provider>
      </form>
    );
  },
);
