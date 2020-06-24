/* eslint-disable import/no-extraneous-dependencies */
import { JSONSchema7, JSONSchema7Definition } from 'json-schema';

export type ExtentedSchema = JSONSchema7 & {
  properties?: {
    [key: string]: JSONSchema7Definition & {
      messages?: {
        [key: string]: string | undefined;
      };
    };
  };
};
