/* eslint-disable import/no-extraneous-dependencies */
import Ajv, { Options } from 'ajv';

import { humanizeErrors, AjvError } from './error';
import omitEmpty from './omitEmpty';
import { ExtentedSchema } from './ExtentedSchema';

export type SchemaGetterPayload = {
  formData: CustomFormData;
};

export type SchemaGetter = (payload: SchemaGetterPayload) => SchemaType;

export type SchemaType = ExtentedSchema | SchemaGetter;

export const makeValidator = (schema: SchemaType, options?: Options) => (
  formData: CustomFormData,
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
    ? schema({ formData })
    : schema) as ExtentedSchema;

  const validate = ajv.compile(schemaAsObject);
  const nextData = omitEmpty(formData);
  const valid = validate(nextData);

  if (valid) return Promise.resolve(nextData);

  const humanizedErrors = humanizeErrors(
    (validate.errors as unknown) as AjvError[],
    schemaAsObject,
  );

  return humanizedErrors.length > 0 ? Promise.reject(humanizedErrors) : Promise.resolve(nextData);
};
