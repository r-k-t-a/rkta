import React, { ReactElement } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const FiveHundredPx = (props: SvgProps): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M6.398,14.775c0.481-0.174,0.928-0.4,1.337-0.683c0.41-0.282,0.797-0.608,1.16-0.982c0.363-0.373,0.736-0.759,1.118-1.159c0.346,0.4,0.71,0.786,1.092,1.159c0.382,0.374,0.787,0.7,1.214,0.982c0.428,0.282,0.887,0.509,1.379,0.683c0.49,0.173,1.017,0.259,1.582,0.259c0.727,0,1.387-0.132,1.977-0.396c0.591-0.264,1.087-0.627,1.487-1.092c0.399-0.464,0.71-1.005,0.928-1.623C19.891,11.306,20,10.642,20,9.932c0-0.71-0.109-1.364-0.328-1.964c-0.218-0.602-0.528-1.123-0.928-1.569c-0.4-0.446-0.892-0.795-1.473-1.05c-0.583-0.256-1.238-0.383-1.966-0.383c-0.581,0-1.123,0.092-1.623,0.273c-0.5,0.182-0.964,0.423-1.391,0.723c-0.428,0.3-0.828,0.65-1.201,1.051c-0.372,0.399-0.732,0.81-1.078,1.228C9.648,7.804,9.28,7.391,8.908,6.999C8.535,6.608,8.135,6.262,7.707,5.962c-0.428-0.3-0.891-0.541-1.391-0.723c-0.5-0.182-1.051-0.273-1.65-0.273c-0.728,0-1.385,0.133-1.965,0.396C2.117,5.626,1.628,5.979,1.227,6.426c-0.4,0.446-0.706,0.974-0.914,1.583C0.104,8.618,0,9.277,0,9.985c0,0.71,0.108,1.374,0.326,1.992c0.219,0.619,0.537,1.15,0.955,1.597c0.419,0.446,0.919,0.801,1.5,1.064c0.584,0.264,1.246,0.396,1.993,0.396C5.374,15.034,5.916,14.948,6.398,14.775z M3.164,11.65c-0.383-0.418-0.573-0.955-0.573-1.609c0-0.6,0.186-1.142,0.561-1.624c0.372-0.48,0.876-0.723,1.515-0.723c0.345,0,0.689,0.078,1.035,0.232c0.346,0.154,0.678,0.35,0.997,0.587C7.016,8.75,7.321,9.009,7.611,9.29c0.291,0.283,0.546,0.542,0.765,0.778c-0.219,0.255-0.464,0.515-0.737,0.776c-0.273,0.266-0.562,0.502-0.872,0.71c-0.311,0.21-0.637,0.382-0.983,0.519c-0.345,0.137-0.691,0.205-1.036,0.205C4.073,12.278,3.546,12.069,3.164,11.65z M14.256,12.088c-0.336-0.127-0.66-0.296-0.968-0.505c-0.311-0.209-0.603-0.445-0.874-0.709c-0.273-0.264-0.528-0.532-0.764-0.806c0.218-0.236,0.463-0.495,0.736-0.778c0.273-0.281,0.56-0.54,0.859-0.776c0.3-0.237,0.619-0.433,0.955-0.587c0.337-0.154,0.688-0.232,1.051-0.232c0.673,0,1.204,0.227,1.596,0.683c0.392,0.454,0.587,1,0.587,1.638c0,0.637-0.183,1.172-0.546,1.608c-0.364,0.438-0.882,0.655-1.555,0.655C14.952,12.278,14.592,12.215,14.256,12.088z" />
  </Svg>
);

export default FiveHundredPx;
