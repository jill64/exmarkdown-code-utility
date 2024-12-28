import type { Plugin } from 'svelte-exmarkdown/types'
import { visit } from 'unist-util-visit'
import { apply } from './apply.js'
import { options as store } from './options.svelte.js'
import CodeLight from './renderer/CodeLight.svelte'
import type { Options } from './types/Options.js'
import type { RootNode } from './types/RootNode.js'

export const codeUtilityLight = (
  options?: Omit<Options, 'highlight'>
): Plugin => {
  store.hideFilename = options?.hideFilename
  store.hideCopyButton = options?.hideCopyButton
  store.filenameTag = options?.filenameTag
  store.codeCopy = options?.codeCopy

  return {
    rehypePlugin: () => (tree: RootNode) => {
      apply(options)(tree)
      visit(tree, 'element', apply(options))
    },
    renderer: {
      code: CodeLight
    }
  }
}
