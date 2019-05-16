import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
import merge from 'lodash/merge';

import defaultTheme from './theme/defaultTheme';
import Context from './Context';

interface ProviderProps {
  /** Extends default theme. The property is not reactive, to modify theme at runtime, use replaceTheme method. */
  theme?: object | null;
}

interface ProviderState {
  theme: object;
}

export default class Provider extends React.Component<ProviderProps, ProviderState> {
  public static defaultProps = {
    theme: null,
  };

  public constructor(props: ProviderProps) {
    super(props);
    this.state = {
      theme: merge(defaultTheme, this.props.theme),
    };
  }

  private replaceTheme = (nextTheme: object): void => {
    this.setState({
      theme: merge(defaultTheme, nextTheme),
    });
  };

  public render(): React.ReactNode {
    const { theme } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Context.Provider value={{ replaceTheme: this.replaceTheme, theme }}>
          {this.props.children}
        </Context.Provider>
      </ThemeProvider>
    );
  }
}
