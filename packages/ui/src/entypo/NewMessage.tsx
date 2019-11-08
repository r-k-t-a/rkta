import React, { ReactElement } from 'react';

import { Svg } from '../Svg';
import { defaultIconSize } from './constants';

const NewMessage = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M18.174,1.826c-1.102-1.102-2.082-0.777-2.082-0.777L7.453,9.681L6,14l4.317-1.454l8.634-8.638C18.951,3.908,19.275,2.928,18.174,1.826z M10.605,11.605l-0.471,0.47l-1.473,0.5c-0.104-0.24-0.234-0.477-0.498-0.74c-0.264-0.264-0.5-0.394-0.74-0.498l0.5-1.473l0.471-0.47c0,0,0.776-0.089,1.537,0.673C10.693,10.828,10.605,11.605,10.605,11.605z M16,17H3V4h5l2-2H3C1.9,2,1,2.9,1,4v13c0,1.1,0.9,2,2,2h13c1.1,0,2-0.9,2-2v-7l-2,2V17z" />
  </Svg>
);

export default NewMessage;
