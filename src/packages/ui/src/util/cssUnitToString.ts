export function cssUnitToString(value?: number | string, defaultUnit?: string): string | undefined {
  if (typeof value === 'number') return `${value}${defaultUnit || 'px'}`;
  return value;
}
