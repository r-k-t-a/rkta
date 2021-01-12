import React, {
  FormEvent as ReactFormEvent,
  forwardRef,
  DetailedHTMLProps,
  FormHTMLAttributes,
  useRef,
  useState,
} from 'react';
import getFormData from 'get-form-data';

import { Context } from './Context';
import { ValidationError } from '../validator/error';
import { setCustomValidity } from './setCustomValidity';

type HTMLFormProps = DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;

export type FormEvent = ReactFormEvent<HTMLFormElement>;

export type FormChildProps = {
  errors: ValidationError[];
  formIsBusy: boolean;
};

export type FormProps = {
  autoSubmit?: boolean;
  onFormSubmit?: (formData: CustomFormData) => void | Promise<void>;
  children?: JSX.Element | ((props: FormChildProps) => JSX.Element);
  validate?: (formData: CustomFormData) => Promise<CustomFormData>;
  useConstraintValidationAPI: boolean;
} & HTMLFormProps;

async function getValidatedData({
  formData,
  formElement,
  validate,
}: {
  formData: CustomFormData;
  formElement: HTMLFormElement;
  validate: FormProps['validate'];
}): Promise<CustomFormData> {
  if (validate) return validate(formData);
  if (formElement.checkValidity()) return Promise.resolve(formData);
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject([]);
}

/*
  autosubmit => reseterrors, validate, submit
  manualSubmit
*/

/**
 * ```js
 * <Form onFormSubmit={func} />
 * ```
 */
export const Form = forwardRef<HTMLFormElement, FormProps>(
  (
    {
      autoSubmit,
      children,
      onFormSubmit,
      validate,
      useConstraintValidationAPI = true,
      ...rest
    }: FormProps,
    externalRef,
  ) => {
    const [formIsBusy, setFormIsBusy] = useState(false);
    const [errors, setErrors] = useState<ValidationError[]>([]);
    const defaultRef = useRef<HTMLFormElement>(null);
    const ref = externalRef || defaultRef;

    async function handleForm(event: FormEvent): Promise<void> {
      event.preventDefault();

      const formElement = event.currentTarget as HTMLFormElement;
      const formData = getFormData(formElement);
      setCustomValidity(formElement, []);

      if (!autoSubmit && (formIsBusy || event.type !== 'submit')) return;

      setFormIsBusy(true);

      const validatedFrom = await getValidatedData({ formData, formElement, validate }).catch(
        (nextErrors) => {
          setErrors(nextErrors);
          if (useConstraintValidationAPI) setCustomValidity(formElement, nextErrors);
        },
      );

      if (validatedFrom && onFormSubmit)
        await Promise.resolve(onFormSubmit(validatedFrom)).finally(() => setFormIsBusy(false));
      setFormIsBusy(false);
    }

    return (
      <form {...rest} onChange={handleForm} onSubmit={handleForm} ref={ref}>
        <Context.Provider value={{ errors }}>
          {typeof children === 'function' ? children({ formIsBusy, errors }) : children}
        </Context.Provider>
      </form>
    );
  },
);
