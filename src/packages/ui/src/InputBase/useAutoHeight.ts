import { RefObject, useRef, useEffect } from 'react';

type Shape = {
  ref: RefObject<HTMLLabelElement>;
  onInput: () => void;
};

export const useAutoHeight = (
  isActive?: boolean,
  value?: string | number | string[],
): Shape | null => {
  if (!isActive) return null;
  const ref = useRef<HTMLLabelElement>(null);
  function onInput(): void {
    if (!ref.current) return;
    const textarea = ref.current.childNodes[0] as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }
  useEffect(onInput, [value, ref.current]);
  return { ref, onInput };
};
