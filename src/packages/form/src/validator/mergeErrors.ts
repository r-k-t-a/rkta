import { ValidationError } from './error';

const keepOtherErrors = (errors: ValidationError[], inputName: string): ValidationError[] =>
  errors.filter(error => error.property !== inputName);

const filterInputErrors = (errors: ValidationError[], inputName: string): ValidationError[] =>
  errors.filter(error => error.property === inputName);

export default (
  oldErrors: ValidationError[],
  nextErrors: ValidationError[],
  inputName: string,
): ValidationError[] => [
  ...keepOtherErrors(oldErrors, inputName),
  ...filterInputErrors(nextErrors, inputName),
];
