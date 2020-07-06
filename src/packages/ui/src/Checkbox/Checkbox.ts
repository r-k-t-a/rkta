import { makeCheckable } from '../makeCheckable';

/**
 * ```js
 * import { CheckBox, Addon, List, ListButton } from '@rkta/ui';
 * <List element="form">
 *   <ListButton element="label" fitAll>
 *     <Addon>
 *       <Checkbox color="primary2" name="Checkbox" />
 *     </Addon>
 *     <Addon main>Option One</Addon>
 *   </ListButton>
 *   <ListButton element="label" fitAll>
 *     <Addon>
 *       <Checkbox color="secondary" name="Checkbox" />
 *     </Addon>
 *     <Addon main>Option Two</Addon>
 *   </ListButton>
 * </List>
 *
 * ```
 */
export const Checkbox = makeCheckable(true);
