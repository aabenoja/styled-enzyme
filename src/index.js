import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { getTheme } from './init';
export { init } from './init';
export { default as shallowWithTheme } from './shallowWithTheme';
export { default as mountWithTheme } from './mountWithTheme';

export function renderWithTheme(tree, theme = getTheme()) {
  return renderer.create(<ThemeProvider theme={theme}>{tree}</ThemeProvider>);
}
