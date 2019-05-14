import * as React from 'react';

interface Props {
  count: number;
}

interface State {
  count: number;
}

export default class Counter extends React.Component<Props, State> {
  state: State = {
    count: 0,
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button type="button">
          Increment
          {count}
        </button>
      </div>
    );
  }
}
