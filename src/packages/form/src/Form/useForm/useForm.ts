import { useState, FormEvent } from 'react';
import getFormData from 'get-form-data';

import { compareNodes } from './compareNodes';
import { ValidationError } from '../../validator/error';

type InputEvent = FormEvent<HTMLFormElement>;

type UseForm = {
  errors: ValidationError[];
  handleBlur: (event: InputEvent) => void;
  handleChange: (event: InputEvent) => void;
  handleSubmit: (event: InputEvent) => void;
};

type ReactHandler = (event: FormEvent) => void;
type CustomHandler = (formData: CustomFormData) => void;
type Hook = (formData: CustomFormData) => CustomFormData;
type AsyncHook = (formData: CustomFormData) => Promise<CustomFormData>;

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
    formData: CustomFormData,
    errors: ValidationError[],
    inputName?: string,
  ) => Promise<CustomFormData>;
  postvalidate?: Hook | AsyncHook;
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
  const getForm = (event: InputEvent): CustomFormData => getFormData(event.currentTarget);

  function shouldValidate(customHandler?: CustomHandler): boolean {
    if (errors.length || live) return true;
    return typeof customHandler === 'function';
  }

  function prevalidateForm(formData: CustomFormData): Promise<CustomFormData> {
    if (!prevalidate) return Promise.resolve(formData);
    const nextFormData = prevalidate(formData);
    return Promise.resolve(nextFormData);
  }

  const makeValidate = (inputName?: string) => (
    formData: CustomFormData,
  ): Promise<CustomFormData> => {
    if (!validate) return Promise.resolve(formData);
    return validate(formData, errors, inputName).catch((nextErrors) => {
      setErrors(nextErrors);
      return Promise.reject(nextErrors);
    });
  };

  function postvalidateForm(formData: CustomFormData): Promise<CustomFormData> {
    setErrors([]);
    if (!postvalidate) return Promise.resolve(formData);
    const nextFormData = postvalidate(formData);
    return Promise.resolve(nextFormData);
  }

  function handleEvent(
    event: InputEvent,
    reactHandler?: ReactHandler,
    customHandler?: CustomHandler,
  ): void {
    const formData = getForm(event) as CustomFormData;
    if (reactHandler) reactHandler(event);
    if (!shouldValidate(customHandler)) {
      if (customHandler) customHandler(formData);
      return;
    }
    const { name } = event.currentTarget;
    const validateForm = makeValidate(name);
    prevalidateForm(formData).then(validateForm).then(postvalidateForm).then(customHandler);
  }

  const handleBlur = (event: InputEvent): void => {
    if (compareNodes(event.target as HTMLElement, lastNode as HTMLElement)) setLastNode(null);
    handleEvent(event, onBlur, onFormBlur);
  };
  const handleChange = (event: InputEvent): void => {
    if (event.nativeEvent.type === 'input') setLastNode(event.target);
    handleEvent(event, onChange, onFormChange);
  };
  const handleSubmit = (event: InputEvent): void => {
    handleEvent(event, onSubmit, onFormSubmit);
    event.preventDefault();
  };

  return { errors, handleBlur, handleChange, handleSubmit };
}
