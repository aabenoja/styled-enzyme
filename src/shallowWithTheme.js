import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

export default function shallowWithTheme(tree, theme) {
  const context = shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext();

  return shallow(tree, { context });
}
