import React, { ReactElement } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

const VkAlternitive = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M19,17V3c0-1.1-0.903-2-2.005-2H3.005C1.855,1,1,1.853,1,3v14c0,1.148,0.855,2,2.005,2h13.99C18.097,19,19,18.101,19,17z M15.184,11.607c0,0,1.132,1.117,1.411,1.635c0.008,0.011,0.011,0.021,0.014,0.025c0.113,0.19,0.142,0.34,0.085,0.45C16.6,13.9,16.28,13.992,16.171,14c0,0-1.943,0-1.999,0c-0.14,0-0.43-0.036-0.782-0.279c-0.27-0.188-0.537-0.499-0.797-0.802c-0.388-0.45-0.724-0.84-1.062-0.84c-0.043,0-0.086,0.007-0.126,0.021c-0.257,0.082-0.583,0.447-0.583,1.422c0,0.305-0.24,0.479-0.41,0.479c0,0-0.872,0-0.916,0c-0.312,0-1.937-0.109-3.376-1.628c-1.766-1.86-3.352-5.591-3.366-5.624c-0.1-0.241,0.107-0.372,0.332-0.372h2.02c0.271,0,0.358,0.164,0.42,0.311C5.596,6.855,5.86,7.529,6.292,8.287c0.703,1.233,1.136,1.735,1.481,1.735c0.064,0,0.126-0.017,0.184-0.049c0.451-0.249,0.367-1.857,0.347-2.189c0-0.063-0.001-0.719-0.231-1.034C7.907,6.522,7.626,6.435,7.456,6.402c0.045-0.065,0.142-0.166,0.266-0.226C8.031,6.022,8.588,6,9.142,6h0.308c0.601,0.008,0.757,0.047,0.974,0.102c0.439,0.105,0.448,0.39,0.409,1.36c-0.011,0.276-0.023,0.589-0.023,0.956c0,0.079-0.003,0.166-0.003,0.256c-0.014,0.496-0.03,1.057,0.32,1.287c0.046,0.028,0.097,0.044,0.151,0.044c0.122,0,0.487,0,1.476-1.697c0.435-0.749,0.77-1.633,0.793-1.699c0.02-0.036,0.079-0.142,0.148-0.183c0.056-0.033,0.128-0.039,0.166-0.039h2.375c0.26,0,0.436,0.039,0.469,0.138c0.057,0.159-0.011,0.644-1.096,2.11c-0.184,0.243-0.343,0.455-0.483,0.64C14.142,10.563,14.142,10.629,15.184,11.607z" />
  </Svg>
);

export default VkAlternitive;