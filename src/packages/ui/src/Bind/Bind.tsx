/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, useRef } from 'react';
import { createPortal } from 'react-dom';

import { upsertNode } from '../util';
import { useProviderContext } from '../Provider';
import { useBind } from './useBind';
import { BindProps } from './Bind.type';

/**
 * ```js
 * import { Bind } from '@rkta/ui';
 *
 * const [target, setTarget] = useState(null);
 * const bind = (event) => setTarget(event.target);
 *
 * return (
 *  <div style={{ display: 'flex', justifyContent: 'space-between', padding: 8 }}>
 *    <Button bgColor="primary" onClick={bind}>
 *      Target 1
 *    </Button>
 *    <Button bgColor="primary" onClick={bind}>
 *      Target 2
 *    </Button>
 *  {target && (
 *         <Bind to={target} visible={!!target}>
 *           <List rize={1}>
 *             <ListTitle>Bind</ListTitle>
 *             <ListButton nowrap>Option 1</ListButton>
 *             <ListButton nowrap>Option 2</ListButton>
 *             <ListButton nowrap>Option 3</ListButton>
 *          </List>
 *        </Bind>
 *         )}
 *     </div>
 *   );
 * }}
 * ```
 */
export const Bind: FC<BindProps> = ({
  children,
  onHide,
  to,
  visible,
  ...rest
}): JSX.Element | null => {
  const ref = useRef<HTMLElement>(null);
  const { fx, bounds, shouldRender } = useBind({
    container: ref,
    isVisible: visible,
    onHide,
    trigger: to,
  });
  const mountTo = upsertNode('ui-popover');
  const { applyStyles } = useProviderContext();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ align, offset, ...elementProps }, Element] = applyStyles(
    { ...rest, bounds, fx },
    'Bind',
  );

  return shouldRender
    ? createPortal(
        // eslint-disable-next-line react/jsx-indent
        <Element {...elementProps} ref={ref}>
          {children}
        </Element>,
        mountTo,
      )
    : null;
};
