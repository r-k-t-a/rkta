import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
import merge from 'lodash/merge';

import defaultTheme from './theme/defaultTheme';
import ThemeDefs from './theme/definitions';
import Context from './Context';

interface ProviderProps {
  theme: ThemeDefs;
}

interface ProviderState {
  theme: ThemeDefs;
}

export default class Provider extends React.Component<ProviderProps, ProviderState> {
  public constructor(props: ProviderProps) {
    super(props);
    this.state = {
      theme: merge(defaultTheme, this.props.theme),
    };
  }

  public render(): React.ReactNode {
    const { theme } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Context.Provider value={{ theme }}>{this.props.children}</Context.Provider>
      </ThemeProvider>
    );
  }
}
