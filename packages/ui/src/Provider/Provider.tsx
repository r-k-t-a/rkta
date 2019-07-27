import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import merge from 'lodash/merge';

import defaultTheme from './theme/defaultTheme';
import { ThemeInterface } from './theme/theme.d';
import Context from './Context';
import { getElement, ElementResolverFunction } from './getElement';

interface ProviderProps {
  /** Extends default theme. The property is not reactive, to modify theme at runtime, use replaceTheme method. */
  theme: ThemeInterface;
  /** Replace default element resolver */
  getElement: ElementResolverFunction;
}

interface ProviderState {
  theme: ThemeInterface;
}

export default class Provider extends React.Component<ProviderProps, ProviderState> {
  public static defaultProps = {
    getElement,
  };

  public constructor(props: ProviderProps) {
    super(props);
    this.state = {
      theme: merge(defaultTheme, this.props.theme),
    };
  }

  private replaceTheme = (nextTheme: ThemeInterface): void => {
    this.setState({
      theme: merge(defaultTheme, nextTheme),
    });
  };

  public render(): React.ReactNode {
    const { theme } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Context.Provider
          value={{ getElement: this.props.getElement, replaceTheme: this.replaceTheme, theme }}
        >
          {this.props.children}
        </Context.Provider>
      </ThemeProvider>
    );
  }
}
