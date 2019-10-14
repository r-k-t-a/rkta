import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from '../ui/src';

const DoczWrapper = ({ children }): React.ReactElement => {
  console.log('Provider', Provider);
  return <Provider>{children}</Provider>;
};

DoczWrapper.propTypes = { children: PropTypes.node.isRequired };

export default DoczWrapper;
