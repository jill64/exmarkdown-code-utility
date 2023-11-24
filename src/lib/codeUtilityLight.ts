import type { Plugin } from 'svelte-exmarkdown/types'
import { visit } from 'unist-util-visit'
import { options as store } from './options.js'
import CodeLight from './renderer/CodeLight.svelte'
import type { Options } from './types/Options.js'

type ElementNode = {
  type: 'element'
  tagName:
    | 'pre'
    | 'code'
    | 'span'
    | 'div'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
  properties: Record<string, string[] | string>
  children: Node[]
}

type TextNode = {
  type: 'text'
  value: string
}

type RootNode = {
  type: 'root'
  children: Node[]
}

type Node = ElementNode | TextNode | RootNode

export const codeUtilityLight = (options?: Options): Plugin => {
  store.set(options)

  const apply = (node: ElementNode | RootNode) => {
    node.children.forEach((child, index) => {
      if (child.type !== 'element') {
        return
      }

      if (child.tagName !== 'pre') {
        return
      }

      const codeIndex = child.children.findIndex(
        (child) => child.type === 'element' && child.tagName === 'code'
      )

      const code = child.children[codeIndex]

      if (code?.type !== 'element') {
        return
      }

      const source = code.children.find((child) => child.type === 'text')

      if (source?.type !== 'text') {
        return
      }

      const className: string[] | string | undefined = code.properties.className

      const cn = (
        typeof className === 'string' ? [className] : className
      )?.find((x) => x.startsWith('language-'))

      const filename = cn?.split(':')[1] ?? ''

      if (code.type === 'element') {
        code.properties = {
          ...code.properties,
          'data-source': source.value
        }
      }

      child.tagName = 'div'
      child.properties.style = 'position: relative;'

      child.children = [
        ...child.children.slice(0, codeIndex),
        code,
        ...child.children.slice(codeIndex + 1)
      ]

      if (options?.hideFilename || !filename) {
        return
      }

      node.children = [
        ...node.children.slice(0, index),
        {
          type: 'element',
          tagName: options?.filenameTag ?? 'div',
          properties: {
            className: ['exmarkdown-code-filename']
          },
          children: [
            {
              type: 'text',
              value: filename
            }
          ]
        },
        ...node.children.slice(index)
      ]
    })
  }

  return {
    rehypePlugin: () => (tree: RootNode) => {
      apply(tree)
      visit(tree, 'element', apply)
    },
    renderer: {
      code: CodeLight
    }
  }
}
