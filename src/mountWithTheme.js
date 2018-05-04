import React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';

const { childContextTypes } = ThemeProvider;

export default function mountWithTheme(tree, theme) {
  const context = shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext();

  return mount(tree, { context, childContextTypes });
}
