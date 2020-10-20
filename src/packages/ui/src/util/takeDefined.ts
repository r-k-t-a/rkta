export function takeDefined<P>(...args: P[]): P | undefined {
  return args.find((arg) => typeof arg !== 'undefined');
}
