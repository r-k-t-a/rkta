import Ajv from 'ajv';

import { humanizeErrors, AjvError, ValidationError } from './error';
import omitEmpty from './omitEmpty';
import mergeErrors from './mergeErrors';

export const makeValidator = (schema: {}, options?: {}) => (
  formData: FormData,
  prevErrors: ValidationError[],
  inputName?: string,
): Promise<FormData> => {
  const defaultOptions = {
    allErrors: true,
    $data: true,
    errorDataPath: 'property',
    format: 'full',
    useDefaults: true,
    v5: true,
  };
  const ajv = new Ajv({ ...defaultOptions, ...options });
  const schemaAsObject =
    typeof schema === 'function' ? schema(formData, inputName, prevErrors) : schema;

  const validate = ajv.compile(schemaAsObject);
  const nextData = omitEmpty(formData);
  const valid = validate(nextData);

  if (valid) return Promise.resolve(nextData);

  const currentErrors = humanizeErrors((validate.errors as unknown) as AjvError[], schemaAsObject);
  const finalErrors = inputName ? mergeErrors(prevErrors, currentErrors, inputName) : currentErrors;

  return finalErrors.length > 0 ? Promise.reject(finalErrors) : Promise.resolve(nextData);
};
