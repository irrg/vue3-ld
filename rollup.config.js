import commonJs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import vue from '@vitejs/plugin-vue';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const name = 'vue3-ld';

export default {
  input: 'src/index.js',
  external: ['launchdarkly-js-client-sdk', 'lodash'],
  output: [
    {
      name,
      format: 'cjs',
      file: 'dist/index.cjs.js',
      exports: 'auto',
    },
    {
      name,
      format: 'es',
      file: 'dist/index.es.js',
    },
  ],
  plugins: [
    nodeResolve({ preferBuiltins: false }),
    commonJs({
      include: 'node_modules/**',
    }),
    vue(),
    babel({
      babelrc: false,
      presets: [
        [
          '@babel/preset-env',
          {
            debug: true,
            targets: '> 1%, last 2 versions, not dead',
            modules: false,
          },
        ],
      ],
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
    }),
  ],
  watch: {
    exclude: ['node_modules/**'],
  },
};
