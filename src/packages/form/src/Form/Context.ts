import { createContext } from 'react';
import { ValidationError } from '../validator/error';

const errors: ValidationError[] = [];

export const Context = createContext({ errors });
