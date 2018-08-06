import { rollup } from 'rollup';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist.js',
    format: 'cjs'
  },
  plugins: [ babel({
    babelrc: false,
    exclude: 'node_modules/**',
    "presets": ["react", ["env", {
      "modules": false,
      "targets": { "node": 6 }
    }] ]
  }) ]
};
