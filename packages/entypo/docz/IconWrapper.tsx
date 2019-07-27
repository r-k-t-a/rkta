import React, { ReactElement } from 'react';

import Atom from '@rkta/ui/Atom';
import Text from '@rkta/ui/Text';
import { CssEmotion } from '@rkta/ui/Provider/theme/theme.d';
import { Props as SvgProps } from '@rkta/ui/Svg/Svg';

export interface IconWrapperProps extends SvgProps {
  icons: {};
  iconName: string;
  width?: number | string;
}

const containerStyles: CssEmotion = {
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: 8,
};

const testStyles = {
  marginTop: 8,
};

const IconWrapper = ({ iconName, icons, width }: IconWrapperProps): ReactElement => {
  const Icon = icons[iconName];
  return (
    <Atom css={{ ...containerStyles, width: width || 110 }}>
      <Icon />
      <Text element="div" overline css={testStyles}>
        {iconName}
      </Text>
    </Atom>
  );
};

export default IconWrapper;
