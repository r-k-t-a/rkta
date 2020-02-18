import { useContext } from 'react';

import { Context } from './Context';
import { ValidationError } from '../validator/error';

export function useErrors(name: string): ValidationError[] {
  const { errors } = useContext(Context);
  return errors.filter(({ property }) => property === name);
}
