import {
  FC,
  cloneElement,
  useEffect,
  useState,
  Children,
  ReactNode,
  useRef,
  ReactElement,
} from 'react';
import get from 'lodash/get';

import { ListButton } from '../List';
import { Button } from '../Button';
import { ArrowKeysProps } from './ArrowKeys.type';
import { dispatchDomEvent } from '../util';

const defaultTypes = [Button, ListButton];

type Setter = (prevIndex: number) => number;
type Map = { key: number; valid: boolean };

/**
 * ```js
 *  import { ArrowKeys, ListTitle, Divider, List, ListButton } from '@rkta/ui';
 *
 *   const list1 = [1, 2, 3];
 *   const list2 = [4, 5];
 *   return (
 *     <List rize={1} sans>
 *       <ArrowKeys vertical>
 *         <ListTitle>Menu List</ListTitle>
 *         <Divider horizontalSpace={16} />
 *         {list1.map(item => (
 *           <ListButton key={item}>Option {item}</ListButton>
 *         ))}
 *         <Divider horizontalSpace={16} />
 *         {list2.map(item => (
 *           <ListButton key={item}>Option {item}</ListButton>
 *         ))}
 *       </ArrowKeys>
 *     </List>
 *   );
 * ```
 */
export const ArrowKeys: FC<ArrowKeysProps> = ({
  children,
  defaultIndex = -1,
  horizontal,
  loop,
  validTypes = defaultTypes,
  vertical,
}): JSX.Element => {
  const [index, setIndex] = useState(defaultIndex);
  const selectedRef = useRef<HTMLElement>(null);
  const isValidType = (child: ReactNode): boolean =>
    validTypes.findIndex((currentType: unknown) => get(child, 'type') === currentType) > -1;

  const childrenArray = Children.toArray(children);

  const validChildren: Map[] = childrenArray
    .map((child, key) => ({
      key,
      valid: isValidType(child),
    }))
    .filter(({ valid }) => valid);

  function next(prevIndex: number): number {
    const cursor = validChildren.findIndex(({ key }) => key === prevIndex);
    const key = validChildren[cursor + 1]?.key;
    const fallBackKey = loop ? defaultIndex : validChildren[validChildren.length - 1]?.key;
    return typeof key === 'number' ? key : fallBackKey;
  }
  function prev(prevIndex: number): number {
    const cursor = validChildren.findIndex(({ key }) => key === prevIndex);
    const key = validChildren[cursor - 1]?.key;
    const fallBackKey =
      loop && prevIndex === -1 ? validChildren[validChildren.length - 1]?.key : defaultIndex;
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
    const action = getAction(event);
    if (action && validChildren.length) {
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
  useEffect(effect, [
    childrenArray.length,
    validChildren.length,
    horizontal,
    vertical,
    index,
    ...validTypes,
  ]);

  return (childrenArray.map((child: ReactNode, key) => {
    if (!isValidType(child)) return child;
    const element = child as ReactElement;
    const isSelected = key === index;
    const ref = isSelected ? selectedRef : element.props.ref;
    return cloneElement(element, {
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
