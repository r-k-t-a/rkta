import {
  FC,
  cloneElement,
  useEffect,
  useState,
  Children,
  ReactElement,
  ReactType,
  useRef,
} from 'react';

import { ListButton } from '../List';
import { Button } from '../Button';
import { Props } from './ArrowKeys.type';
import { dispatchDomEvent } from '../util';

const defaultTypes = [Button, ListButton];

type Setter = (prevIndex: number) => number;
type Map = { key: number; valid: boolean };

export const ArrowKeys: FC<Props> = ({
  children,
  defaultIndex = -1,
  horizontal,
  loop,
  validTypes = defaultTypes,
  vertical,
}: Props): JSX.Element => {
  const [index, setIndex] = useState(defaultIndex);
  const selectedRef = useRef<HTMLElement>(null);
  const isValidType = (type: ReactType | string): boolean =>
    validTypes.findIndex(currentType => currentType === type) > -1;

  const getMap = (): Map[] =>
    children
      .map(({ type }, key) => ({
        key,
        valid: isValidType(type),
      }))
      .filter(({ valid }) => valid);

  function next(prevIndex: number): number {
    const map = getMap();
    const cursor = map.findIndex(({ key }) => key === prevIndex);
    const key = map[cursor + 1]?.key;
    const fallBackKey = loop ? defaultIndex : map[map.length - 1]?.key;
    return typeof key === 'number' ? key : fallBackKey;
  }
  function prev(prevIndex: number): number {
    const map = getMap();
    const cursor = map.findIndex(({ key }) => key === prevIndex);
    const key = map[cursor - 1]?.key;
    const fallBackKey = loop && prevIndex === -1 ? map[map.length - 1]?.key : defaultIndex;
    return typeof key === 'number' ? key : fallBackKey;
  }
  function getAction({ keyCode }: KeyboardEvent): Setter | null {
    if (horizontal && keyCode === 37) return prev;
    if (horizontal && keyCode === 39) return next;
    if (vertical && keyCode === 38) return prev;
    if (vertical && keyCode === 40) return next;
    return null;
  }
  function handleKey(event: KeyboardEvent): void {
    const map = getMap();
    const action = getAction(event);
    if (action && map.length) {
      setIndex(action);
      event.preventDefault();
      event.stopImmediatePropagation();
    }
    if (event.keyCode === 13 && selectedRef.current) {
      dispatchDomEvent(selectedRef.current, 'click');
    }
  }
  function effect(): () => void {
    document.addEventListener('keydown', handleKey);
    return (): void => document.removeEventListener('keydown', handleKey);
  }
  useEffect(effect, [children.length, horizontal, vertical, index, ...validTypes]);

  return (Children.map(children, (child: ReactElement, key) => {
    const { type } = child;
    if (!isValidType(type)) return child;
    const isSelected = key === index;
    const ref = isSelected ? selectedRef : child.props.ref;
    return cloneElement(child, {
      key: `${key}-${isSelected}`,
      'aria-selected': isSelected,
      ref,
    });
  }) as unknown) as JSX.Element;
};

ArrowKeys.defaultProps = {
  loop: true,
  validTypes: defaultTypes,
};
