import React, { ReactElement, SFC } from 'react';

import Atom from '../Atom';
import useStyles from '../util/useStyles';
import { SvgProps } from './Svg.d';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Svg: SFC<SvgProps> = ({ children, ...rest }: SvgProps): ReactElement => {
  const nextProps = useStyles('Svg', rest);
  return (
    <Atom {...nextProps} element="svg">
      {children}
    </Atom>
  );
};

export default Svg;
