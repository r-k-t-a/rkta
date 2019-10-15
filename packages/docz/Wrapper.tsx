import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from '../ui/lib';

const DoczWrapper = ({ children }): React.ReactElement => {
  console.log('Provider', Provider);
  return <Provider>{children}</Provider>;
};

DoczWrapper.propTypes = { children: PropTypes.node.isRequired };

export default DoczWrapper;
