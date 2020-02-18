/* eslint-disable @typescript-eslint/no-explicit-any */
export interface AjvError {
  dataPath: string;
  keyword: string;
  message: string;
  property: string;
}

export interface ValidationError {
  error: AjvError;
  message: string;
  property: string;
}

export const humanizeErrors = (errors: AjvError[], schema: any): ValidationError[] =>
  errors.map(error => {
    const property = error.dataPath.replace('.', '');
    const schemaProperty = schema.properties[property];
    const schemaMessage = schemaProperty.messages && schemaProperty.messages[error.keyword];
    return {
      error,
      message: schemaMessage || error.message,
      property,
    };
  });
