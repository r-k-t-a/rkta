import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { defaultIconSize } from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const QqWithCircle = (props: any): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10,0.3999634c-5.3019409,0-9.5999756,4.2980957-9.5999756,9.6000366S4.6980591,19.5999756,10,19.5999756S19.5999756,15.3019409,19.5999756,10S15.3019409,0.3999634,10,0.3999634z M14.0076904,12.3206177c-0.1832886,0.0952148-0.4691772-0.1222534-0.7367554-0.5205688c-0.1051025,0.4349976-0.3689575,0.8283081-0.7427979,1.1436157c0.3933716,0.144104,0.6499634,0.3811646,0.6499634,0.6499023c0,0.4422607-0.6952515,0.7990723-1.5528564,0.7990723c-0.7733765,0-1.4147949-0.2907715-1.5332642-0.671936H9.9075317c-0.1185913,0.3811646-0.758728,0.671936-1.5321655,0.671936c-0.857605,0-1.5527954-0.3568115-1.5527954-0.7990723c0-0.2687378,0.2565918-0.5057983,0.6500244-0.6499023c-0.375061-0.3153076-0.6377563-0.7086182-0.7441406-1.1436157c-0.2674561,0.3983154-0.5533447,0.6157837-0.7354736,0.5205688c-0.2651367-0.1368408-0.2125854-0.8797607,0.1173096-1.6542969c0.2589722-0.6109009,0.6121826-1.0605469,0.878418-1.1582031c-0.0036621-0.0390625-0.0048828-0.078186-0.0048828-0.1172485c0-0.2370605,0.06604-0.4545288,0.177124-0.6305542C7.1598511,8.7456665,7.1585693,8.7310791,7.1585693,8.718811c0-0.1098633,0.0269165-0.210083,0.0708008-0.2980347c0.0671997-1.5858154,1.0996094-2.8442993,2.7709961-2.8442993c1.6700439,0,2.7024536,1.2584839,2.770874,2.8442993c0.0440063,0.0879517,0.0697021,0.1881714,0.0697021,0.2980347c0,0.0122681,0,0.0268555-0.0025024,0.0415039c0.1124268,0.1760254,0.177124,0.3934937,0.177124,0.6305542c0,0.0390625-0.0010986,0.078186-0.0048828,0.1172485c0.2676392,0.0976562,0.6193848,0.5473022,0.878479,1.1582031C14.2202148,11.4408569,14.2715454,12.1837769,14.0076904,12.3206177z" />
  </Svg>
);

export default QqWithCircle;
