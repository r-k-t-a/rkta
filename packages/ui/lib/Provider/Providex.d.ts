import * as React from 'react';
interface Props {
    count: number;
}
interface State {
    count: number;
}
export default class Counter extends React.Component<Props, State> {
    state: State;
    render(): JSX.Element;
}
export {};
