export function isRefObject<R>(r: R): boolean {
  return r && 'curent' in r;
}
