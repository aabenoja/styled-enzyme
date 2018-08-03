import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import getContext from './getContext';
import { getTheme } from './init';

const { childContextTypes } = ThemeProvider;

export default function mountWithTheme(tree, theme = getTheme()) {
  const context = getContext(theme);

  return mount(tree, { context, childContextTypes });
}
