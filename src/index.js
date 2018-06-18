import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';

const { childContextTypes } = ThemeProvider;

let defaultTheme = {};

export const init = theme => defaultTheme = theme;

export function mountWithTheme(tree, theme = defaultTheme) {
  const context = shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext();

  return mount(tree, { context, childContextTypes });
}

export function shallowWithTheme(tree, theme = defaultTheme) {
  const context = shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext();

  return shallow(tree, { context });
}

export function renderWithTheme(tree, theme = defaultTheme) {
  return renderer.create(<ThemeProvider theme={theme}>{tree}</ThemeProvider>);
}
