/* eslint-disable react/static-property-placement */
import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import merge from 'lodash/merge';

import defaultTheme from './theme/defaultTheme';
import { ThemeInterface } from './theme/theme.defs';
import Context from './Context';
import { getElement, ElementResolverFunction } from './getElement';
import useStyles, { NextPropsAndElementType, useStylesFunctionType } from './useStyles';

interface ProviderProps {
  /** Extends default theme. The property is not reactive, to modify theme at runtime, use replaceTheme method. */
  theme?: ThemeInterface;
  /** Replace default element resolver */
  getElement: ElementResolverFunction;
}

interface ProviderState {
  theme: ThemeInterface;
}

const getThemeTs = (): object => ({ ts: Date.now() });

const REPLACE_THEME = Symbol('');
const USE_STYLES = Symbol('');

export default class Provider extends React.Component<ProviderProps, ProviderState> {
  public static defaultProps = {
    getElement,
  };

  // eslint-disable-next-line react/state-in-constructor
  public state = {
    theme: merge(defaultTheme, this.props.theme, getThemeTs()),
  };

  private [USE_STYLES]: useStylesFunctionType = (props, ...composition): NextPropsAndElementType =>
    useStyles({ composition, getElement: this.props.getElement, theme: this.state.theme, props });

  private [REPLACE_THEME] = (nextTheme: ThemeInterface): void => {
    this.setState({ theme: merge(defaultTheme, nextTheme, getThemeTs()) });
  };

  public render(): React.ReactNode {
    const { theme } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Context.Provider
          value={{
            getElement: this.props.getElement,
            replaceTheme: this[REPLACE_THEME],
            theme,
            applyStyles: this[USE_STYLES],
          }}
        >
          {this.props.children}
        </Context.Provider>
      </ThemeProvider>
    );
  }
}
