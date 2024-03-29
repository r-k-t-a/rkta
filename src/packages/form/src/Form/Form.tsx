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
  children?: JSX.Element | JSX.Element[] | ((props: FormChildProps) => JSX.Element);
  validate?: (formData: CustomFormData) => Promise<CustomFormData>;
  useConstraintValidationAPI?: boolean;
} & HTMLFormProps;

type FormEventItem = {
  formElement: HTMLFormElement;
  formData: CustomFormData;
};

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
    const lastEvent = useRef<FormEventItem | null>(null);
    const ref = externalRef || defaultRef;

    async function doValidation() {
      const eventItem = lastEvent.current;
      lastEvent.current = null;
      if (!eventItem) return undefined;
      const { formElement, formData } = eventItem;
      const validatedForm = await getValidatedData({ formData, formElement, validate }).catch(
        (nextErrors) => {
          setErrors(nextErrors);
          if (useConstraintValidationAPI) {
            setCustomValidity(formElement, nextErrors);
          }
        },
      );
      if (useConstraintValidationAPI && validatedForm) setCustomValidity(formElement, []);
      if (validatedForm) setErrors([]);
      return validatedForm;
    }

    async function handleForm(event: FormEvent): Promise<void> {
      const formElement = event.currentTarget as HTMLFormElement;
      const formData = getFormData(formElement);
      if (!autoSubmit && useConstraintValidationAPI) setCustomValidity(formElement, []);

      const isSubmitEvent = !formIsBusy && event.type === 'submit';
      if (!autoSubmit && !isSubmitEvent) return;

      lastEvent.current = { formElement, formData };

      const prevFormIsBusy = formIsBusy;
      setFormIsBusy(true);
      if (autoSubmit && prevFormIsBusy) return;

      const validatedForm = await doValidation();

      if (validatedForm && onFormSubmit) {
        await Promise.resolve(onFormSubmit(validatedForm)).finally(() => setFormIsBusy(false));
      }

      if (lastEvent.current) await doValidation();

      setFormIsBusy(false);
    }

    function handleSubmit(event: FormEvent) {
      event.preventDefault();
      handleForm(event);
    }

    return (
      <form {...rest} onChange={handleForm} onSubmit={handleSubmit} ref={ref}>
        <Context.Provider value={{ errors }}>
          {typeof children === 'function' ? children({ formIsBusy, errors }) : children}
        </Context.Provider>
      </form>
    );
  },
);
