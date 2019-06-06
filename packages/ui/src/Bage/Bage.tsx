import React from 'react';

import Paper from '../Paper';
import { Props as PaperProps } from '../Paper/Paper';

interface Props extends PaperProps {
  children: React.ReactNode;
  /** Reset Margins */
  fitAll?: boolean;
  /** Reset Left Margin */
  fitLeft?: boolean;
  /** Reset Right Margin */
  fitRight?: boolean;
}

const Bage = (props: Props): React.ReactNode => <Paper rounded overline nowrap {...props} />;

export default Bage;
