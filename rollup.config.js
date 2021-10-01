import babel from "rollup-plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.js",
  output: [
    {
      file: "bundle.js",
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    babel({
      babelrc: true,
      exclude: "node_modules/**",
    }),
    commonjs(),
    nodeResolve(),
  ],
};
