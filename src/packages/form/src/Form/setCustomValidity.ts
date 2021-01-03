import { ValidationError } from '../validator/error';

export function setCustomValidity(
  formElement: HTMLFormElement,
  validationErrors: ValidationError[],
): void {
  Array.from(formElement.elements).forEach((element) => {
    (element as HTMLInputElement).setCustomValidity('');
  });
  validationErrors.slice(0, 1).forEach(({ property, message }) => {
    const element = formElement[property] as HTMLInputElement;
    element?.setCustomValidity(message);
  });
  formElement.reportValidity();
}
