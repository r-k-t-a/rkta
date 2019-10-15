import { ElementType } from 'react';
import { Resolver } from './getElement.type';

export const getElement: Resolver = (element, { href }): ElementType => (href ? 'a' : element);
