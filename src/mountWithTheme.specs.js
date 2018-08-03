import React from 'react';
import styled from 'styled-components';
import { init } from './init';
import mountWithTheme from './mountWithTheme';

const defaultTheme = { backgroundColor: 'red', color: 'blue' };
const customTheme = { backgroundColor: 'blue', color: 'red' };

const Button = styled.button`
  color: ${({theme}) => theme.color};
`;

const Content = styled.span`
  background-color: ${({theme}) => theme.backgroundColor};
`;

init(defaultTheme);

test('mounts the instance with the default theme', () => {
  const instance = mountWithTheme(<Button><Content>Stuff</Content></Button>);
  expect(instance.context('__styled-components__next__').getTheme().color)
    .toBe(defaultTheme.color);
});

test('mounts the instance with the custom theme', () => {
  const instance = mountWithTheme(<Button><Content>Stuff</Content></Button>, customTheme);
  expect(instance.context('__styled-components__next__').getTheme().color)
    .toBe(customTheme.color);
});
