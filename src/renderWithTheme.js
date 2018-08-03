import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { getTheme } from './init';

export default function renderWithTheme(tree, theme = getTheme()) {
  return renderer.create(<ThemeProvider theme={theme}>{tree}</ThemeProvider>);
}
