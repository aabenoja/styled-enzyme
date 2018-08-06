'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var enzyme = require('enzyme');
var styledComponents = require('styled-components');
var renderer = _interopDefault(require('react-test-renderer'));

let defaultTheme = {};

const init = theme => defaultTheme = theme;
const getTheme = () => defaultTheme;

function getContext(theme) {
  return enzyme.shallow(React.createElement(styledComponents.ThemeProvider, { theme: theme })).instance().getChildContext();
}

function shallowWithTheme(tree, theme = getTheme()) {
  const context = getContext(theme);

  return enzyme.shallow(tree, { context });
}

const childContextTypes = styledComponents.ThemeProvider.childContextTypes;


function mountWithTheme(tree, theme = getTheme()) {
  const context = getContext(theme);

  return enzyme.mount(tree, { context, childContextTypes });
}

function renderWithTheme(tree, theme = getTheme()) {
  return renderer.create(React.createElement(
    styledComponents.ThemeProvider,
    { theme: theme },
    tree
  ));
}

exports.init = init;
exports.shallowWithTheme = shallowWithTheme;
exports.shallow = shallowWithTheme;
exports.mountWithTheme = mountWithTheme;
exports.mount = mountWithTheme;
exports.renderWithTheme = renderWithTheme;
exports.render = renderWithTheme;
