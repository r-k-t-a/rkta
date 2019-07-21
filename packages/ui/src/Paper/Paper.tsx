import React, { SFC, ReactElement } from 'react';

import Text from '../Text';
import { Props as TextProps } from '../Text/Text';
import useStyles from '../util/useStyles';

export interface Props extends TextProps {
  bgColor?: string;
  clip?: boolean;
  disabled?: boolean;
  hardBottom?: boolean;
  hardLeft?: boolean;
  hardTop?: boolean;
  hardRight?: boolean;
  readOnly?: boolean;
  relative?: boolean;
  rize?: number;
  round?: boolean;
  rounded?: boolean;
  size?: number;
  transparent?: boolean;
}

const Paper: SFC<Props> = (props: Props): ReactElement => {
  const nextProps = useStyles('Paper', props);
  return <Text element="div" {...nextProps} />;
};

export default Paper;
