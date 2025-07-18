import { builtinModules } from 'node:module'
import resolve from '@rollup/plugin-node-resolve'
import { readFileSync } from 'node:fs'
import typescript from '@rollup/plugin-typescript'

const pkg = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url), 'utf8'),
)

/** @type {import('rollup').RollupOptions} */
export default {
  input: 'src/index.ts',
  external: Object.keys(pkg.dependencies || {})
    .concat(Object.keys(pkg.peerDependencies || {}))
    .concat(builtinModules),
  strictDeprecations: true,
  output: [
    {
      format: 'cjs',
      file: pkg.main,
      exports: 'named',
      footer: 'module.exports = Object.assign(exports.default, exports);',
      sourcemap: true,
    },
    {
      format: 'es',
      file: pkg.module,
      sourcemap: true,
    },
  ],
  plugins: [typescript({ sourceMap: true }), resolve()],
}
