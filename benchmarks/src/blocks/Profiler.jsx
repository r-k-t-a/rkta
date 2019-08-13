import React, { Profiler, useState } from 'react';
import PropTypes from 'prop-types';

const onRender = (event, phase, actualTime) => {
  if (phase === 'mount') console.log(event, phase, actualTime);
};

const WrappedProfiler = ({ id, children }) => {
  const [actualTime, setActualTime] = useState(null);
  return (
    <Profiler
      id={id}
      onRender={(event, phase, actualTime) => {
        if (phase === 'mount') setActualTime(actualTime);
      }}
    >
      {actualTime && <div>Rendered in {actualTime}ms</div>}
      {children}
    </Profiler>
  );
};
WrappedProfiler.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default WrappedProfiler;
