import React from 'react';
import { init, shallowWithTheme } from './index';
import styled from 'styled-components';

const defaultTheme = { color: 'blue' };
const customTheme = { color: 'red' };

const Button = styled.button`
  color: ${({theme}) => theme.color};
`;

init(defaultTheme);

test('shallowly renders the instance with the default theme', () => {
  const instance = shallowWithTheme(<Button />);
  expect(instance.context('__styled-components__next__').getTheme().color)
    .toBe(defaultTheme.color);
});

test('shallowly renders the instance with the custom theme', () => {
  const instance = shallowWithTheme(<Button />, customTheme);
  expect(instance.context('__styled-components__next__').getTheme().color)
    .toBe(customTheme.color);
});
