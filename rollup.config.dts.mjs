import dts from 'rollup-plugin-dts'

/** @type {import('rollup').RollupOptions} */
export default {
  input: 'src/index.ts',
  output: [
    {
      format: 'es',
      file: 'dist/index.d.ts',
    },
  ],
  plugins: [dts()],
}
