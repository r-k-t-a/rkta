import { useState, RefObject, FormEvent } from 'react';
import getFormData from 'get-form-data';

import { compareNodes } from './compareNodes';
import { ValidationError } from '../../validator/error';

type InputEvent = FormEvent<HTMLFormElement>;

interface UseForm {
  errors: ValidationError[];
  handleBlur: (event: InputEvent) => void;
  handleChange: (event: InputEvent) => void;
  handleSubmit: (event: InputEvent) => void;
}

type ReactHandler = (event: FormEvent) => void;
type CustomHandler = (formData: FormData) => void;
type Hook = (formData: FormData) => FormData;
type AsyncHook = (formData: FormData) => Promise<FormData>;

export interface Props {
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
}

export function useForm(
  ref: RefObject<HTMLFormElement>,
  {
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
  }: Props,
): UseForm {
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [lastNode, setLastNode] = useState<EventTarget | null>(null);
  const getForm = (): FormData => getFormData(ref.current);

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
    return validate(formData, errors, inputName);
  };

  function postvalidateForm(formData: FormData): Promise<FormData> {
    if (!postvalidate) return Promise.resolve(formData);
    setErrors([]);
    const nextFormData = postvalidate(formData);
    return Promise.resolve(nextFormData);
  }

  function handleEvent(
    event: InputEvent,
    reactHandler?: ReactHandler,
    customHandler?: CustomHandler,
  ): void {
    const formData = getForm() as FormData;
    if (reactHandler) reactHandler(event);
    if (!shouldValidate(customHandler)) {
      if (customHandler) customHandler(formData);
      return;
    }
    const { name } = event.currentTarget;
    const validateForm = makeValidate(name);
    prevalidateForm(formData)
      .then(validateForm)
      .then(postvalidateForm);
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
  };

  return { errors, handleBlur, handleChange, handleSubmit };
}
