import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { Props as SvgProps } from '@rkta/ui/Svg/Svg';
import { defaultIconSize } from './constants';

const RaftWithCircle = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10,0.3999634c-5.3019409,0-9.5999756,4.2980957-9.5999756,9.6000366S4.6980591,19.5999756,10,19.5999756S19.5999756,15.3019409,19.5999756,10S15.3019409,0.3999634,10,0.3999634z M13.2145996,14.1933594c-0.2791138,0.2668457-0.6635742,0.4196167-1.0544434,0.4196167c-0.479248,0-0.8673706-0.1790771-1.1529541-0.5317993c-0.1981812-0.2437744-0.3081055-0.4963379-0.4658203-0.9358521l-0.0786743-0.2192383c-0.1825562-0.4981689-0.3439941-0.7497559-0.5766602-0.8786011c-0.0708618,0.2709961-0.1489868,0.5244751-0.2336426,0.7557983c-0.4451294,1.2155151-1.0774536,1.8318481-1.8795166,1.8318481c-0.4515991,0-0.8493652-0.1855469-1.1202393-0.5220947c-0.3320312-0.413208-0.4382935-0.9963379-0.2993774-1.6422119l0.0298462-0.138916l1.0158691,0.2220459l-0.0298462,0.1384888c-0.0717773,0.3319702-0.0427856,0.5997314,0.0813599,0.7543945c0.076355,0.0946045,0.1848755,0.1431274,0.3223877,0.1431274c0.3991699,0,0.795166-0.6389771,1.0940552-1.7594604c-0.3274536-0.1112671-0.6281738-0.2755737-0.895813-0.4902954l-0.1099243-0.0881348L8.508728,10.43396l0.1107788,0.088623c0.1412354,0.1135864,0.2989502,0.2064209,0.470459,0.2765503c0.0869141-0.4985962,0.1563721-1.0461426,0.2073975-1.6310425l0.0124512-0.1412964l1.0351562,0.0914307l-0.0123901,0.1412354c-0.0524292,0.6020508-0.1237183,1.1671143-0.2115479,1.682373c0.7141724-0.0720215,1.3649292-0.477417,1.7268677-1.086792c0.5932007-0.9990845,0.3572998-2.2496948-0.5606079-2.9740601c-0.3922729-0.3098145-0.9685059-0.4855957-1.5065918-0.4588623C9.109314,6.4503174,8.5432129,6.7526245,8.0985107,7.3311157c-0.5353394,0.6957397-0.5918579,1.7386475-0.1342773,2.479126l0.0744629,0.1204834l-0.8829346,0.5526733l-0.0745239-0.1209717C6.392334,9.246582,6.4723511,7.7364502,7.2766724,6.6907349C7.9080811,5.8690186,8.7588501,5.418457,9.7374878,5.3773804c0.7988281-0.0313721,1.6026611,0.2164307,2.1913452,0.6804199c1.3354492,1.0535278,1.6766968,2.8762207,0.8116455,4.333252c-0.3807373,0.6412354-0.9689331,1.130127-1.6693115,1.3933105c0.1296387,0.1975708,0.2400513,0.43396,0.3665161,0.7792969l0.0813599,0.2261963c0.2557373,0.7142334,0.3724976,0.7778931,0.6411133,0.7778931c0.1213989,0,0.2542725-0.0516968,0.3380127-0.132019c0.1609497-0.1541748,0.208313-0.4505615,0.1411743-0.8812866l-0.0220947-0.1403809l1.0269165-0.1620483l0.0220947,0.1403809C13.7876587,13.1712036,13.6312866,13.7940063,13.2145996,14.1933594z" />
  </Svg>
);

export default RaftWithCircle;
