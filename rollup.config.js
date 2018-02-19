import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
// import commonjs from 'rollup-plugin-commonjs';

const pkg = require('./package.json');

const external = Object.keys(pkg.dependencies);

const plugins = [
  resolve({
    jsnext: true,
    main: true
  }),
  babel(babelrc()),
];

export default {
  entry: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: plugins,
  external: external,
}
