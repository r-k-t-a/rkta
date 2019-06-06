import React, { ReactElement } from 'react';

import IconWrapper from './IconWrapper';

export interface IconListProps {
  icons: {};
}

const IconList = (props: IconListProps): ReactElement => (
  <div>
    {Object.keys(props.icons).map(
      (iconName): ReactElement => (
        <IconWrapper {...props} key={iconName} iconName={iconName} />
      ),
    )}
  </div>
);

export default IconList;
