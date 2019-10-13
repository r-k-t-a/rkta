/* eslint-disable react/static-property-placement */
import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import merge from 'lodash/merge';

import defaultTheme from './theme/defaultTheme';
import { RktaTheme } from './theme/theme.type';
import Context from './Context';
import { getElement } from './getElement';
import { Resolver } from './getElement.type';
import useStyles, { NextPropsAndElementType, useStylesFunctionType } from './useStyles';

interface ProviderProps {
  /** Extends default theme. The property is not reactive, to modify theme at runtime, use replaceTheme method. */
  theme?: RktaTheme;
  /** Replace default element resolver */
  getElement: Resolver;
}

interface ProviderState {
  theme: RktaTheme;
}

const getThemeTs = (): object => ({ ts: Date.now() });

const REPLACE_THEME = Symbol('');
const USE_STYLES = Symbol('');

export class Provider extends React.Component<ProviderProps, ProviderState> {
  public static defaultProps = {
    getElement,
  };

  // eslint-disable-next-line react/state-in-constructor
  public state = {
    theme: merge(defaultTheme, this.props.theme, getThemeTs()),
  };

  private [USE_STYLES]: useStylesFunctionType = (props, ...composition): NextPropsAndElementType =>
    useStyles({ composition, getElement: this.props.getElement, theme: this.state.theme, props });

  private [REPLACE_THEME] = (nextTheme: RktaTheme): void => {
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

export default Provider;
