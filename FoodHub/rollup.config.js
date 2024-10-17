import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/FoodHub_frontend/src/main.jsx', 
  output: {
    dir: 'src/FoodHub_frontend/dist', 
    format: 'esm',
    manualChunks(id) {
      if (id.includes('node_modules')) {
        return 'vendor';  
      }
      if (id.includes('src/components')) {
        return 'components'; 
      }
    }
  },
  plugins: [
    resolve(), 
    commonjs(),
    babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'] // Enables JSX and ES6+ support
      }),
      terser() // Optional: minify output for better performance
  ]
};
