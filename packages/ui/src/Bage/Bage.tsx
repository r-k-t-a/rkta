import React, { ReactNode, ReactElement, SFC } from 'react';

import Paper from '../Paper';
import { Props as PaperProps } from '../Paper/Paper';
import useStyles from '../util/useStyles';

interface Props extends PaperProps {
  children: ReactNode;
  /** Reset Margins */
  fitAll?: boolean;
  /** Reset Left Margin */
  fitLeft?: boolean;
  /** Reset Right Margin */
  fitRight?: boolean;
}

const Bage: SFC<Props> = (props: Props): ReactElement => {
  const nextProps = useStyles('Bage', props);
  return <Paper rounded overline nowrap {...nextProps} />;
};

export default Bage;
