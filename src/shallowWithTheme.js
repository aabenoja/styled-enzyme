import { shallow } from 'enzyme';
import getContext from './getContext';
import { getTheme } from './init';

export default function shallowWithTheme(tree, theme = getTheme()) {
  const context = getContext(theme);

  return shallow(tree, { context });
}
