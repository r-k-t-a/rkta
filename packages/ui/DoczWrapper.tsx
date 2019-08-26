import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from './src/Provider';

const DoczWrapper = ({ children }): React.ReactElement => <Provider>{children}</Provider>;

DoczWrapper.propTypes = { children: PropTypes.node.isRequired };

export default DoczWrapper;
