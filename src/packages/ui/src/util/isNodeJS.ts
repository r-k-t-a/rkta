export const isNodeJS = !!(
  typeof process !== 'undefined' &&
  process.versions &&
  process.versions.node
);
