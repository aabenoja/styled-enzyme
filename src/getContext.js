import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

export default function getContext(theme) {
  return shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext();
}
