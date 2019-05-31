import React from 'react';

import Paper from '../Paper';
import BageProps from './Bage.types';

const Bage = (props: BageProps): React.ReactNode => <Paper rounded overline nowrap {...props} />;

export default Bage;
