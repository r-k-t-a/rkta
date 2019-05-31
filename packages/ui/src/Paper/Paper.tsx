import React from 'react';

import Text from '../Text';
import { Props as FontProps } from '../Text/Text';

export interface Props extends FontProps {
  bgColor?: string;
  clip?: boolean;
  disabled?: boolean;
  hardBottom?: boolean;
  hardLeft?: boolean;
  hardTop?: boolean;
  hardRight?: boolean;
  rize?: number;
  round?: boolean;
  rounded?: boolean;
  size?: number;
  transparent?: boolean;
}

const Paper = (props: Props): React.ReactNode => <Text element="div" {...props} />;

export default Paper;
