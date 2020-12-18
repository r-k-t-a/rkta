import { useState, FormEvent as ReactFormEvent } from 'react';
import getFormData from 'get-form-data';

import { ValidationError } from '../../validator/error';

export type FormEvent = ReactFormEvent<HTMLFormElement>;

export type FormData = {
  [key: string]: string | string[];
};

type UseForm = {
  errors: ValidationError[];
  handleForm: (event: FormEvent) => void;
};

/*
busy
  unbusy
    => auto | disabled | manual
disabled
  enable
    => auto | disabled | manual
auto
  change, submit
    => busy
    => on error => auto
    => on success => auto | disabled | manual
manual
  submit
    => busy
    => on error => auto
    => on success => auto | disabled | manual
*/

export type Props = {
  autoSubmit?: boolean;
  onFormSubmit?: (formData: CustomFormData) => void;
  validate?: (
    formData: CustomFormData,
    errors: ValidationError[],
    inputName?: string,
  ) => Promise<CustomFormData>;
};

function setCustomValidity(formElement: HTMLFormElement, validationErrors: ValidationError[]) {
  Array.from(formElement.elements).forEach((element) => {
    (element as HTMLInputElement).setCustomValidity('');
  });
  validationErrors.forEach(({ property, message }) => {
    const element = formElement[property] as HTMLInputElement;
    element.setCustomValidity(message);
  });
  formElement.reportValidity();
}

export function useForm({ autoSubmit, onFormSubmit, validate }: Props): UseForm {
  const [isBusy, setIsBusy] = useState(false);
  const [errors, setErrors] = useState<ValidationError[]>([]);

  function getValidatedData(formData: FormData): Promise<FormData> {
    if (!validate) return Promise.resolve(formData);
    return validate(formData, errors);
  }

  return {
    errors,
    handleForm(event: FormEvent): void {
      event.preventDefault();

      const formElement = event.currentTarget as HTMLFormElement;
      const formData = getFormData(formElement);
      setCustomValidity(formElement, errors);

      if (isBusy || (event.type !== 'submit' && !autoSubmit)) return;

      setIsBusy(true);

      getValidatedData(formData)
        .then((validatedFrom) => {
          if (onFormSubmit) onFormSubmit(validatedFrom);
          setErrors([]);
          setCustomValidity(formElement, []);
        })
        .catch((nextErrors) => {
          setErrors(nextErrors);
          setCustomValidity(formElement, nextErrors);
        })
        .finally(() => setIsBusy(false));
    },
  };
}
