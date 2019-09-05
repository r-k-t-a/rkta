import React, { ReactNode } from 'react';

import { Paper, Text } from '..';

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Popover = ({ children, onClose, ...rest }: Props): ReactNode => {
  return (
    <Paper
      bgColor="warning"
      color="paper"
      rize={1}
      style={{
        padding: 24,
        paddingTop: 48,
        position: 'fixed',
        bottom: 50,
        right: 16,
        width: 500,
        zIndex: 1000,
      }}
      {...rest}
    >
      <button onClick={onClose} style={{ position: 'absolute', top: 8, right: 8 }} type="button">
        Close
      </button>
      <Text h6>{children}</Text>
    </Paper>
  );
};

export default Popover;
