import React from 'react';
import PropTypes from 'prop-types';
import { GlobalCss, Provider } from '@rkta/ui/src';

function DoczWrapper({ children }) {
  return (
    <Provider>
      <GlobalCss body links />
      {children}
    </Provider>
  );
}

DoczWrapper.propTypes = { children: PropTypes.node.isRequired };

export default DoczWrapper;
