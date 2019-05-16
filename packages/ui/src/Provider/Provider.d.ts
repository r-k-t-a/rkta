import * as React from 'react';
import ThemeDefs from './theme/definitions';
interface ProviderProps {
    theme: ThemeDefs;
}
interface ProviderState {
    theme: ThemeDefs;
}
export default class Provider extends React.Component<ProviderProps, ProviderState> {
    constructor(props: ProviderProps);
    render(): React.ReactNode;
}
export {};
