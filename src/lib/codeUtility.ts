import type { Plugin } from 'svelte-exmarkdown/types'
import { visit } from 'unist-util-visit'
import { apply } from './apply.js'
import Code from './renderer/Code.svelte'
import type { Options } from './types/Options.js'
import type { RootNode } from './types/RootNode.js'

export const codeUtility = (options?: Options): Plugin => {
  return {
    rehypePlugin: () => (tree: RootNode) => {
      apply(options)(tree)
      visit(tree, 'element', apply(options))
    },
    renderer: {
      code: Code
    }
  }
}
