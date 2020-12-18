import React, { ReactNode, forwardRef, DetailedHTMLProps, FormHTMLAttributes } from 'react';

import { Context } from './Context';
import { useForm, Props as HookProps } from './useForm/useForm';

type HTMLFormProps = DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> &
  HookProps;

type Props = HTMLFormProps & {
  children: ReactNode;
  onChange: never;
  onSubmit: never;
};

export const Form = forwardRef<HTMLFormElement, Props>(
  ({ autoSubmit, children, onFormSubmit, validate, ...rest }, ref) => {
    const { errors, handleForm } = useForm({
      autoSubmit,
      onFormSubmit,
      validate,
    });
    return (
      <form
        {...rest}
        onBlur={autoSubmit ? handleForm : undefined}
        onChange={handleForm}
        onSubmit={handleForm}
        ref={ref}
      >
        <Context.Provider value={{ errors }}>{children}</Context.Provider>
      </form>
    );
  },
);
