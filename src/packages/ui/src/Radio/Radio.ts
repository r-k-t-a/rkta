import { makeCheckable } from '../makeCheckable';

export { CheckableProps } from './Radio.type';

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
