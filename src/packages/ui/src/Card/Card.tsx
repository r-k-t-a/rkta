/** @jsx jsx */
import { FC } from 'react';
import { jsx } from '@emotion/core';

import { CardProps } from './Card.type';
import { useProviderContext } from '../Provider';

/**
 * ```js
 * import { Card, CardHeader, CardBody, CardFooter, Button, Addon } from '@rkta/ui';
 *
 * <Card bgColor="color10" rize={1}>
 *   <CardHeader fitRight>
 *     CardHeader
 *     <Addon>
 *       <Button round>
 *         <DotsThreeVertical />
 *       </Button>
 *     </Addon>
 *   </CardHeader>
 *   <CardBody color="textSecondary">
 *     This impressive paella is a perfect party dish and a fun meal to cook together with your
 *     guests. Add 1 cup of frozen peas along with the mussels, if you like.
 *   </CardBody>
 *   <CardFooter flexEnd>
 *     <Button>Button 1</Button>
 *     <Button>Button 2</Button>
 *   </CardFooter>
 * </Card>
 *
 * ```
 */
export const Card: FC<CardProps> = ({ children, ...rest }): JSX.Element => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles(rest, 'Paper', 'Text');
  return <Element {...nextProps}>{children}</Element>;
};
