export function upsertNode(id: string): HTMLElement {
  const node = document.getElementById(id);
  if (node) return node;
  const element = document.createElement('div');
  element.id = id;
  document.body.appendChild(element);
  return element;
}
