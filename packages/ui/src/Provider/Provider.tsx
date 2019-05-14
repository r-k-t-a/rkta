import * as React from 'react';

interface Props {
  count: number;
}

interface State {
  count: number;
};

export default class Counter extends React.Component<Props, State> {
  state: State = {
    count: 0
  };

  render () {
    return (
      <div>
        <button>Increment</button>
      </div>
    );
  }
}
