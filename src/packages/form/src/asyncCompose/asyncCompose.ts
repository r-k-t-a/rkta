/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { FormData } from '../Form';

type AnyFunction = (input: any) => any | Promise<any>;

export const asyncCompose = (...functions: AnyFunction[]) => (input: FormData): Promise<any> => {
  return functions.reduceRight((chain, func) => chain.then(func), Promise.resolve(input));
};
