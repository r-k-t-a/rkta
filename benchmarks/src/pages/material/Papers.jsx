import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import range from 'lodash/range';

import Profiler from '../../blocks/Profiler';

const styles = {
  bgrd: {
    backgroundColor: '#F36F1B',
  },
};

const Papers = ({ classes }) => (
  <Fragment>
    <h1>Material papers</h1>
    <Profiler id="rkta-papers">
      {range(0, 10000).map(index => (
        <Paper className={classes.bgrd} key={index}>
          Paper {index}
        </Paper>
      ))}
    </Profiler>
  </Fragment>
);

export default withStyles(styles)(Papers);
