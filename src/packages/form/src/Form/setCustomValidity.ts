import { ValidationError } from '../validator/error';

export function setCustomValidity(
  formElement: HTMLFormElement,
  validationErrors: ValidationError[],
): void {
  const errorsMessagesMap = validationErrors.reduce(
    (acc, { property, message }) => ({
      ...acc,
      [property]: message,
    }),
    {},
  ) as { [key: string]: string };

  Array.from(formElement.elements)
    .reverse()
    .forEach((element) => {
      const elem = element as HTMLInputElement;
      const elementName = elem.name;
      const errorMessage = errorsMessagesMap[elementName];

      if (!errorMessage) {
        elem.setCustomValidity('');
        return;
      }

      if (elem.validationMessage !== errorMessage) {
        elem.setCustomValidity(errorMessage);
        elem.reportValidity();
      }
    });
}
