/* eslint-disable import/no-extraneous-dependencies */
import Ajv, { Options } from 'ajv';

import { humanizeErrors, AjvError, ValidationError } from './error';
import omitEmpty from './omitEmpty';
import mergeErrors from './mergeErrors';
import { ExtentedSchema } from './ExtentedSchema';
import { CustomFormData } from '../@types/CustomFormData';

type SchemaGetterPayload = {
  formData: CustomFormData;
  inputName: string | undefined;
  errors: ValidationError[];
};

type SchemaGetter = (payload?: SchemaGetterPayload) => SchemaType;

type SchemaType = ExtentedSchema | SchemaGetter;

export const makeValidator = (schema: SchemaType, options?: Options) => (
  formData: CustomFormData,
  errors: ValidationError[],
  inputName?: string,
): Promise<CustomFormData> => {
  const defaultOptions: Options = {
    allErrors: true,
    $data: true,
    errorDataPath: 'property',
    format: 'full',
    useDefaults: true,
  };
  const ajv = new Ajv({ ...defaultOptions, ...options });
  const schemaAsObject = (typeof schema === 'function'
    ? schema({ formData, inputName, errors })
    : schema) as ExtentedSchema;

  const validate = ajv.compile(schemaAsObject);
  const nextData = omitEmpty(formData);
  const valid = validate(nextData);

  if (valid) return Promise.resolve(nextData);

  const currentErrors = humanizeErrors((validate.errors as unknown) as AjvError[], schemaAsObject);
  const finalErrors = inputName ? mergeErrors(errors, currentErrors, inputName) : currentErrors;

  return finalErrors.length > 0 ? Promise.reject(finalErrors) : Promise.resolve(nextData);
};
