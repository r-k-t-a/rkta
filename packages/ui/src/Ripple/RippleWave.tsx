import React, { ReactElement, SFC } from 'react';

import { Props as PaperProps } from '../Paper/Paper';
import Paper from '../Paper';
import { getStyle } from './RippleWave.styles';

interface Props extends PaperProps {
  onDissolve?: Function;
  released?: boolean;
  size: number;
}

const RippleWave: SFC<Props> = ({ onDissolve, released, css, ...rest }: Props): ReactElement => (
  <Paper
    element="span"
    css={getStyle(released, css)}
    onTransitionEnd={onDissolve}
    round
    {...rest}
  />
);

RippleWave.defaultProps = {
  onDissolve: undefined,
  released: false,
};

export default RippleWave;
