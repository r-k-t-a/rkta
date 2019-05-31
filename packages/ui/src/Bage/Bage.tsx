import React from 'react';

import { CssEmotion } from '../Provider/theme/theme.types';
import Paper from '../Paper';
import { Props as PropsProps } from '../Paper/Paper';

interface Props extends PropsProps {
  children: React.ReactNode;
  css?: CssEmotion;
  element?: React.ElementType;

  /** Reset Margins */
  fitAll?: boolean;
  /** Reset Left Margin */
  fitLeft?: boolean;
  /** Reset Right Margin */
  fitRight?: boolean;
}

const Bage = (props: Props): React.ReactNode => <Paper rounded overline nowrap {...props} />;

export default Bage;
