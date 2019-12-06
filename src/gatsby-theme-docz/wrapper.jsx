import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from '@rkta/ui';

function DoczWrapper({ children }) {
  return <Provider>{children}</Provider>;
}

DoczWrapper.propTypes = { children: PropTypes.node.isRequired };

export default DoczWrapper;
