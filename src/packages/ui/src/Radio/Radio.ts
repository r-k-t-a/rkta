import { makeCheckable } from '../makeCheckable';

/**
 * import { Addon, Radio } from '@rkta/ui';
 *
 * ```js
 * <Addon>
 *   <Radio color="primary2" name="radio" />
 * </Addon>
 * ```
 */
export const Radio = makeCheckable(false);
