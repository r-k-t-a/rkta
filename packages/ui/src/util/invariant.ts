export default (condition: boolean, message: string): void => {
  if (!condition) throw new Error(message);
};
