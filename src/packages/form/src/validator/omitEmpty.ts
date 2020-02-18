/* eslint-disable @typescript-eslint/no-explicit-any */
import omitBy from 'lodash.omitby';

const ignoredValues = ['', null, undefined, NaN];
const makeOmitPredicate = (ignored?: any[]) => (value: any): boolean =>
  ignoredValues.concat(ignored).indexOf(value) !== -1;

export default (formData: CustomFormData, ignored?: any[]): CustomFormData =>
  omitBy(formData, makeOmitPredicate(ignored));
