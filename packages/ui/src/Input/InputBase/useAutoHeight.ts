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
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }
  useEffect(onInput, [value]);
  return { ref, onInput };
};
