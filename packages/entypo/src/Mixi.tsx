import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { Props as SvgProps } from '@rkta/ui/Svg/Svg';
import { defaultIconSize } from './constants';

const Mixi = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M9.546,17.258h0.955v2.143c6.51-0.684,9.982-7.143,9.421-11.691C19.358,3.16,14.471,0.018,8.978,0.69C3.486,1.364-0.49,5.598,0.072,10.149C0.585,14.287,4.674,17.262,9.546,17.258z M15.694,12.86h-1.831V7.907c0-0.199-0.018-0.387-0.053-0.557c-0.029-0.148-0.084-0.273-0.164-0.381c-0.076-0.1-0.187-0.182-0.33-0.244c-0.152-0.066-0.363-0.1-0.623-0.1c-0.537,0-0.957,0.141-1.251,0.416c-0.291,0.273-0.433,0.633-0.433,1.1v4.719H9.179V7.907c0-0.205-0.019-0.395-0.059-0.564c-0.034-0.15-0.091-0.277-0.173-0.387C8.87,6.854,8.768,6.778,8.633,6.719c-0.144-0.062-0.34-0.094-0.58-0.094c-0.312,0-0.58,0.059-0.795,0.174c-0.223,0.117-0.405,0.26-0.541,0.422C6.579,7.385,6.478,7.555,6.418,7.727C6.356,7.899,6.326,8.037,6.326,8.141v4.719H4.494V5.164h1.758v0.6c0.574-0.508,1.306-0.766,2.181-0.766c0.51,0,0.981,0.103,1.399,0.305c0.306,0.147,0.554,0.365,0.738,0.652c0.231-0.248,0.504-0.451,0.814-0.609c0.454-0.231,0.958-0.348,1.499-0.348c0.402,0,0.773,0.043,1.102,0.127c0.343,0.086,0.644,0.225,0.895,0.412c0.258,0.193,0.46,0.445,0.602,0.75c0.141,0.301,0.212,0.66,0.212,1.07V12.86z" />
  </Svg>
);

export default Mixi;
