/** @jsx jsx */
import { FC, ReactElement, forwardRef } from 'react';
import { jsx } from '@emotion/core';

import { ListProps } from './List.type';
import { useProviderContext } from '../Provider';

/**
 * ```js
 *
 * import { List, ListTitle, ListButton, ListItem,
 * ListTitle, ListText, Addon, Divider }
 * from `@rkta/ui`;
 * import { ChevronSmallRight, Wallet } from '@rkta/entypo';
 *
 * <List rize={1} sans>
 *  <ListTitle>List Title</ListTitle>
 *  <ListButton fitAll>
 *    <Addon>
 *      <Wallet />
 *    </Addon>
 *    <Addon main>Button with Addons</Addon>
 *    <Addon>
 *      <ChevronSmallRight />
 *    </Addon>
 *   </ListButton>
 *   <ListButton inset>Inset Button</ListButton>
 *   <ListButton fitAll>
 *     <Addon inset main>
 *       Inset Button with Addon
 *     </Addon>
 *     <Addon>
 *       <ChevronSmallRight />
 *     </Addon>
 *   </ListButton>
 *   <Divider fitAll />
 *   <ListItem muted>Muted Item</ListItem>
 *   <ListItem bgColor="color9">Highlighted Item</ListItem>
 *   <ListButton color="secondary" fitAll>
 *     <Addon>
 *       <Wallet />
 *     </Addon>
 *     <Addon main>Color Button</Addon>
 *     <Addon>
 *       <ChevronSmallRight />
 *     </Addon>
 *   </ListButton>
 *   <Divider fitAll />
 *   <ListButton fitAll>
 *     <Addon>
 *       <Wallet />
 *     </Addon>
 *     <ListText label="Item with text" description="Some description" />
 *   </ListButton>
 *   <ListButton fitAll>
 *     <Addon>
 *       <Wallet />
 *     </Addon>
 *     <ListText label="Reversed item" description="Some description" reverse />
 *   </ListButton>
 * </List>
 * ```
 */
export const List: FC<ListProps> = forwardRef<HTMLElement, ListProps>(
  ({ children, ...rest }: ListProps, ref): ReactElement => {
    const { applyStyles } = useProviderContext();
    const [nextProps, Element] = applyStyles(rest, 'List', 'Paper', 'Text');
    return (
      <Element {...nextProps} ref={ref}>
        {children}
      </Element>
    );
  },
);
