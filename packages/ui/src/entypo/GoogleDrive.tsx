import React, { ReactElement } from 'react';

import { Svg } from '../Svg';
import { defaultIconSize } from './constants';

const GoogleDrive = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M8.175,13l-3.324,6h11.824L20,13H8.175z M5.865,2.299L0,12.914l3.372,6.084L9.238,8.383L5.865,2.299z M19.445,12L13.349,1H6.604l6.088,11H19.445z" />
  </Svg>
);

export default GoogleDrive;
