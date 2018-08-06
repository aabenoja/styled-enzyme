# styled-enzyme

Apply themes to your enzyme tests - the easy way.

Based on [jest-styled-components](https://github.com/styled-components/jest-styled-components/tree/b4bac456ea9426743a2201433fff64ee5233e0fc#theming) and
[@sfitzpatrick/enzyme-context-helpers](https://www.npmjs.com/package/@sfitzpatrick/enzyme-context-helpers)

## Installation

```shell
npm i -D styled-enzyme
```

## API

### init()

Set the `defaultTheme` to use with `shallowWithTheme`, `mountWithTheme` and `renderWithTheme`.
The default theme is an empty object, so it is highly encouraged to provide your own.

```js
import { init } from 'styled-enzyme';

init(yourTheme);
```

### shallowWithTheme

Shallowly renders your component with the default theme using enzyme's `shallow()` function.
If you want to use a theme different from the default theme you may pass that as the second
argument;

```js
import { shallowWithTheme } from 'styled-enzyme';

const shallowDefault = shallowWithTheme(instance);
const customShallow = shallowWithTheme(instance, customTheme);
```

A convenient `shallow` alias for `shallowWithTheme` has been provided.

```js
import { shallow } from 'styled-enzyme';

const shallowDefault = shallow(instance);
const customShallow = shallow(instance, customTheme);
```

### mountWithTheme

Fully renders your component with the default theme using enzyme's `mount()` function.
If you want to use a theme different from the default theme you may pass that as the second
argument;

```js
import { mountWithTheme } from 'styled-enzyme';

const mountedDefault = mountWithTheme(instance);
const mountedCustom = mountWithTheme(instance, customTheme);
```

A convenient `mount` alias for `mountWithTheme` has been provided.

```js
import { mount } from 'styled-enzyme';

const mountedDefault = mount(instance);
const mountedCustom = mount(instance, customTheme);
```

### renderWithTheme

Create a json snapshot using `react-test-renderer` with the default theme. If you want to
use a theme different from the default theme you may pass that as the second argument;

```js
import { renderWithTheme } from 'styled-enzyme';

const themedSnapshot = renderWithTheme(instance);
const customThemedSnapshot = renderWithTheme(instance, customTheme);
```

A convenient `render` alias for `renderWithTheme` has been provided.

```js
import { render } from 'styled-enzyme';

const themedSnapshot = render(instance);
const customThemedSnapshot = render(instance, customTheme);
```
