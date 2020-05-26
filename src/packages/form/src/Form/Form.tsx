import React, {
  ReactNode,
  useRef,
  forwardRef,
  RefObject,
  DetailedHTMLProps,
  FormHTMLAttributes,
} from 'react';

import { Context } from './Context';
import { useForm, Props as HookProps } from './useForm/useForm';

type HTMLFormProps = DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> &
  HookProps;

interface Props extends HTMLFormProps {
  children: ReactNode;
}

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
      prevalidate,
      validate,
      postvalidate,
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
      prevalidate,
      validate,
      postvalidate,
    });
    return (
      <form {...rest} onChange={handleChange} onBlur={handleBlur} onSubmit={handleSubmit} ref={ref}>
        <Context.Provider value={{ errors }}>{children}</Context.Provider>
      </form>
    );
  },
);
