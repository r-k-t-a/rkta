import range from 'lodash/range';

export const makePlaceHolder = (character?: string) => (length: number): string =>
  range(0, length)
    .map(() => character || '\u258A')
    .join('\u200A');
