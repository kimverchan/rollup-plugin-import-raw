import fs from 'node:fs'
import type { Plugin } from 'rollup'

export default function importRaw(): Plugin {
  const importers: Record<string, string | undefined> = {}

  const filter = (id: string) => id.endsWith('?raw')
  return {
    name: 'rollup-plugin-import-raw',

    resolveId(source, importer) {
      if (filter(source)) {
        importers[source] = importer
        return source
      }
      return null
    },
    async load(id) {
      if (filter(id)) {
        const importer = importers[id]
        id = id.replace(/\?raw$/, '')
        const result = await this.resolve(id, importer)
        if (!result) {
          throw new Error(`cannot resolve file: '${id}' `)
        }
        return `export default ${JSON.stringify(fs.readFileSync(result.id, 'utf-8'))}`
      }
      return null
    },
  }
}
