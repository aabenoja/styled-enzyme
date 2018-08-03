import React from 'react';
import styled from 'styled-components';
import 'jest-styled-components';

import { init } from './init';
import renderWithTheme from './renderWithTheme';

const defaultTheme = { color: 'blue' };
const customTheme = { color: 'red' };

const Button = styled.button`
  color: ${({theme}) => theme.color};
`;

init(defaultTheme);

test('renders a snapshot with the default theme', () => {
  const instance = renderWithTheme(<Button>Stuff</Button>).toJSON();
  expect(instance).toHaveStyleRule('color', 'blue');
});

test('renders a snapshot with the custom theme', () => {
  const instance = renderWithTheme(<Button>Stuff</Button>, customTheme).toJSON();
  expect(instance).toHaveStyleRule('color', 'red');
});
