import { RefObject, useRef, useEffect } from 'react';

interface Shape {
  ref: RefObject<HTMLLabelElement>;
  onInput: () => void;
}

export const useAutoHeight = (
  isActive?: boolean,
  value?: string | number | string[],
): Shape | null => {
  if (!isActive) return null;
  const ref = useRef<HTMLLabelElement>(null);
  function onInput(): void {
    if (!ref.current) return;
    const textarea = ref.current.childNodes[1] as HTMLTextAreaElement;
    const { clientHeight, offsetHeight } = textarea;
    textarea.style.height = 'auto';
    const height = offsetHeight - clientHeight + textarea.scrollHeight;
    textarea.style.height = `${height}px`;
  }
  useEffect(onInput, [value]);
  return { ref, onInput };
};
