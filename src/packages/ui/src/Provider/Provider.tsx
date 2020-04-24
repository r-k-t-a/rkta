/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import { Context, ThemeProvider } from '@rkta/context';

import { mountTheme, RktaTheme } from './theme';
import { getElement } from './getElement';
import { NextPropsAndElementType, useStyles, useStylesFunctionType } from './useStyles';
import { Props, State, Context as ContextInterface } from './Provider.type';

const REPLACE_THEME = Symbol('');
const USE_STYLES = Symbol('');

export class Provider extends Component<Props, State> {
  public static defaultProps = {
    getElement,
  };

  // eslint-disable-next-line react/state-in-constructor
  public state = {
    modalQueue: [],
    theme: mountTheme(),
  };

  private [USE_STYLES]: useStylesFunctionType = (props, ...composition): NextPropsAndElementType =>
    useStyles({ composition, getElement: this.props.getElement, theme: this.state.theme, props });

  private [REPLACE_THEME] = (nextTheme: RktaTheme): void => {
    this.setState({ theme: mountTheme(nextTheme) });
  };

  private addModal = (symbol: symbol): void => {
    this.setState(({ modalQueue }) => ({
      modalQueue: [symbol, ...modalQueue],
    }));
  };

  private removeModal = (symbol: symbol): void => {
    this.setState(({ modalQueue }) => ({
      modalQueue: modalQueue.filter(item => item !== symbol),
    }));
  };

  public render(): React.ReactNode {
    const { theme } = this.state;
    const context: ContextInterface = {
      addModal: this.addModal,
      modal: this.state.modalQueue[0],
      removeModal: this.removeModal,
      getElement: this.props.getElement,
      replaceTheme: this[REPLACE_THEME],
      theme,
      applyStyles: this[USE_STYLES],
    };
    return (
      <ThemeProvider theme={theme}>
        <Context.Provider value={context}>{this.props.children}</Context.Provider>
      </ThemeProvider>
    );
  }
}
