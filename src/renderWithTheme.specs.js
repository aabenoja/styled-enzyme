import React from 'react';
import { init, renderWithTheme } from './index';
import styled from 'styled-components';
import 'jest-styled-components';

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
