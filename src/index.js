import React from 'react';
import renderer from 'react-test-renderer';
import {
  shallow,
  mount
} from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { getTheme } from './init';
export { init } from './init';

const { childContextTypes } = ThemeProvider;

export function mountWithTheme(tree, theme = getTheme()) {
  const context = shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext();

  return mount(tree, { context, childContextTypes });
}

export function renderWithTheme(tree, theme = getTheme()) {
  return renderer.create(<ThemeProvider theme={theme}>{tree}</ThemeProvider>);
}
