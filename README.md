[npm]: https://img.shields.io/npm/v/@rollup/plugin-inject
[npm-url]: https://www.npmjs.com/package/@rollup/plugin-inject
[size]: https://packagephobia.now.sh/badge?p=@rollup/plugin-inject
[size-url]: https://packagephobia.now.sh/result?p=@rollup/plugin-inject

[![npm][npm]][npm-url]
[![size][size]][size-url]
[![libera manifesto](https://img.shields.io/badge/libera-manifesto-lightgrey.svg)](https://liberamanifesto.com)

# rollup-plugin-import-raw

🍣 A Rollup plugin which assets can be imported as strings using the ?raw suffix.

## Requirements

This plugin requires an [LTS](https://github.com/nodejs/Release) Node version (v14.0.0+) and Rollup v1.20.0+.

## Install

Using npm:

```console
npm install rollup-plugin-import-raw --save-dev
```

## Usage

Create a `rollup.config.js` [configuration file](https://www.rollupjs.org/guide/en/#configuration-files) and import the plugin:

```js
import importRaw from 'rollup-plugin-import-raw'

export default {
  input: 'src/index.js',
  output: {
    dir: 'output',
    format: 'cjs',
  },
  plugins: [importRaw()],
}
```

Then call `rollup` either via the [CLI](https://www.rollupjs.org/guide/en/#command-line-reference) or the [API](https://www.rollupjs.org/guide/en/#javascript-api).

Examples:

imported `tsconfig.ts` file as string

```js
import tsconfigStr from './tsconfig.ts?raw'
```

## Meta

[LICENSE (MIT)](/LICENSE)
