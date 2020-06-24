import { ExtentedSchema } from './ExtentedSchema';

export type AjvError = {
  dataPath: string;
  keyword: string;
  message: string;
  property: string;
};

export type ValidationError = {
  error: AjvError;
  message: string;
  property: string;
};

export const humanizeErrors = (errors: AjvError[], schema: ExtentedSchema): ValidationError[] =>
  errors.map((error) => {
    const property = error.dataPath.replace('.', '');
    const schemaProperty = schema.properties && schema.properties[property];
    const schemaMessage = schemaProperty?.messages && schemaProperty.messages[error.keyword];
    return {
      error,
      message: schemaMessage || error.message,
      property,
    };
  });
