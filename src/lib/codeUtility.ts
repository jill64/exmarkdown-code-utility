import type { Plugin } from 'svelte-exmarkdown/types'
import { visit } from 'unist-util-visit'
import { apply } from './apply.js'
import { options as store } from './options.svelte.js'
import Code from './renderer/Code.svelte'
import type { Options } from './types/Options.js'
import type { RootNode } from './types/RootNode.js'

export const codeUtility = (options?: Options): Plugin => {
  store.hideFilename = options?.hideFilename
  store.hideCopyButton = options?.hideCopyButton
  store.filenameTag = options?.filenameTag
  store.highlight = options?.highlight
  store.codeCopy = options?.codeCopy

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
