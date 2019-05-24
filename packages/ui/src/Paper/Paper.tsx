import React from 'react';

import Text from '../Text';
import { Props as FontProps } from '../Text/Text';

export interface Props extends FontProps {
  children?: React.ReactNode;

  size?: number;
  rize?: number;

  clip?: boolean;
  disabled?: boolean;
  hardBottom?: boolean;
  hardLeft?: boolean;
  hardTop?: boolean;
  hardRight?: boolean;
  readOnly?: boolean;
  round?: boolean;
  rounded?: boolean;
  transparent?: boolean;
}

const Paper = (props: Props): React.ReactNode => <Text element="div" {...props} />;

export default Paper;
