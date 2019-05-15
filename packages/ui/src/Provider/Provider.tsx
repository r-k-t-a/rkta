import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
import merge from 'lodash/merge';

import defaultTheme from './theme/defaultTheme';
import ThemeDefs from './theme/defenitions';

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
    return <ThemeProvider theme={this.state.theme}>{this.props.children}</ThemeProvider>;
  }
}
