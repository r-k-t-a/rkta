import range from 'lodash/range';

export const placeholder = (length: number, character?: string): string =>
  range(0, length)
    .map(() => character || '\u258A')
    .join('\u200A');
