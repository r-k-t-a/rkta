import { useReducer, useEffect, RefObject } from 'react';
import debounce from 'lodash/debounce';
import useClickAway from 'react-use/lib/useClickAway';

export const VISIBLE = 1;
const HIDDEN = 0;
const EXITING = 2;

const EXIT = Symbol('EXIT');
const HIDE = Symbol('HIDE');
const SHOW = Symbol('SHOW');
const UPDATE_BOUNDS = Symbol('UPDATE_BOUNDS');

type State = {
  bounds: DOMRect;
  fx: 0 | 1 | 2;
  shouldRender: boolean;
};

type Args = {
  container: RefObject<HTMLElement>;
  isVisible: boolean;
  onHide: () => void;
  trigger: Element;
};

type Action = {
  type: symbol;
  bounds?: DOMRect;
};

const init = ({ isVisible, trigger }: Args): State => ({
  bounds: trigger.getBoundingClientRect(),
  fx: isVisible ? 1 : 0,
  shouldRender: isVisible,
});

function reducer(state: State, { bounds, type }: Action): State {
  switch (type) {
    case EXIT:
      return { ...state, fx: HIDDEN, shouldRender: false };
    case HIDE:
      return { ...state, fx: EXITING, shouldRender: true };
    case SHOW:
      return { ...state, fx: VISIBLE, shouldRender: true };
    case UPDATE_BOUNDS:
      return { ...state, bounds: bounds as DOMRect };
    default:
      return state;
  }
}

function domRectToString(domRect: DOMRect): string {
  const { top, right, bottom, left, width, height, x, y } = domRect;
  return [top, right, bottom, left, width, height, x, y].join();
}

export function useBind(args: Args): State {
  const [state, dispatch] = useReducer(reducer, args, init);
  const container = args.container?.current;

  function handleEscape(event: KeyboardEvent): void {
    if (args.isVisible && event.key === 'Escape') {
      event.stopImmediatePropagation();
      args.onHide();
    }
  }

  function handleExit(): void {
    if (state.fx === EXITING) dispatch({ type: EXIT });
  }

  function updateBounds(): void {
    const bounds = args.trigger.getBoundingClientRect();
    const prevValues = domRectToString(state.bounds);
    const nextValues = domRectToString(bounds);
    if (prevValues !== nextValues) dispatch({ type: UPDATE_BOUNDS, bounds });
  }

  const debouncedUpdateBounds = debounce(updateBounds, 80);

  function effect(): () => void {
    const interval = setInterval(updateBounds, 1024);
    if (container) container.addEventListener('animationend', handleExit, false);
    document.addEventListener('keydown', handleEscape, false);
    window.addEventListener('scroll', debouncedUpdateBounds);
    window.addEventListener('resize', debouncedUpdateBounds);
    updateBounds();
    if (!args.isVisible && state.shouldRender) dispatch({ type: HIDE });
    if (args.isVisible && !state.shouldRender) dispatch({ type: SHOW });
    return (): void => {
      clearInterval(interval);
      if (container) container.removeEventListener('animationend', handleExit);
      document.removeEventListener('keydown', handleEscape);
      window.removeEventListener('scroll', debouncedUpdateBounds);
      window.removeEventListener('resize', debouncedUpdateBounds);
    };
  }

  function handleClickAway(event: MouseEvent): void {
    if (args.onHide && !args.trigger.contains(event.target as Element)) args.onHide();
  }
  useClickAway(args.container, handleClickAway);
  useEffect(effect, [...Object.values(args), state.bounds, container, state.fx]);
  return state;
}
