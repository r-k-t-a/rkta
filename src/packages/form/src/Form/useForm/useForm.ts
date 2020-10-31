import { useState, FormEvent as ReactFormEvent } from 'react';
import getFormData from 'get-form-data';

import { compareNodes } from './compareNodes';
import { ValidationError } from '../../validator/error';

export type FormEvent = ReactFormEvent<HTMLFormElement>;

export type FormData = {
  [key: string]: string | string[];
};

type UseForm = {
  errors: ValidationError[];
  handleBlur: (event: FormEvent) => void;
  handleChange: (event: FormEvent) => void;
  handleSubmit: (event: FormEvent) => void;
};

type ReactHandler = (event: FormEvent) => void;
type CustomHandler = (formData: FormData) => void;
type Hook = (formData: FormData) => FormData;
type AsyncHook = (formData: FormData) => Promise<FormData>;

export type Props = {
  live?: boolean;
  onBlur?: ReactHandler;
  onChange?: ReactHandler;
  onSubmit?: ReactHandler;
  onFormBlur?: CustomHandler;
  onFormChange?: CustomHandler;
  onFormSubmit?: CustomHandler;
  prevalidate?: Hook | AsyncHook;
  validate?: (
    formData: FormData,
    errors: ValidationError[],
    inputName?: string,
  ) => Promise<FormData>;
  postvalidate?: Hook | AsyncHook;
};

const getInputName = (event: FormEvent): string | undefined => {
  try {
    const node = event.target as HTMLElement;
    return node.getAttribute('name') || undefined;
  } catch (error) {
    return undefined;
  }
};

export function useForm({
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
}: Props): UseForm {
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [lastNode, setLastNode] = useState<EventTarget | null>(null);
  const getForm = (event: FormEvent): FormData => getFormData(event.currentTarget);

  function shouldValidate(customHandler?: CustomHandler): boolean {
    if (errors.length || live) return true;
    return typeof customHandler === 'function';
  }

  function prevalidateForm(formData: FormData): Promise<FormData> {
    if (!prevalidate) return Promise.resolve(formData);
    const nextFormData = prevalidate(formData);
    return Promise.resolve(nextFormData);
  }

  const makeValidate = (inputName?: string) => (formData: FormData): Promise<FormData> => {
    if (!validate) return Promise.resolve(formData);
    return validate(formData, errors, inputName).catch((nextErrors) => {
      setErrors(nextErrors);
      return Promise.reject(nextErrors);
    });
  };

  function postvalidateForm(formData: FormData): Promise<FormData> {
    setErrors([]);
    if (!postvalidate) return Promise.resolve(formData);
    const nextFormData = postvalidate(formData);
    return Promise.resolve(nextFormData);
  }

  function handleEvent(
    event: FormEvent,
    reactHandler?: ReactHandler,
    customHandler?: CustomHandler,
  ): void {
    const formData = getForm(event) as FormData;
    if (reactHandler) reactHandler(event);
    if (!shouldValidate(customHandler)) {
      if (customHandler) customHandler(formData);
      return;
    }
    const inputName = getInputName(event);
    const validateForm = makeValidate(inputName);

    prevalidateForm(formData).then(validateForm).then(postvalidateForm).then(customHandler);
  }

  const handleBlur = (event: FormEvent): void => {
    if (compareNodes(event.target as HTMLElement, lastNode as HTMLElement)) setLastNode(null);
    handleEvent(event, onBlur, onFormBlur);
  };
  const handleChange = (event: FormEvent): void => {
    if (event.nativeEvent.type === 'input') setLastNode(event.target);
    handleEvent(event, onChange, onFormChange);
  };
  const handleSubmit = (event: FormEvent): void => {
    handleEvent(event, onSubmit, onFormSubmit);
    event.preventDefault();
  };

  return { errors, handleBlur, handleChange, handleSubmit };
}
