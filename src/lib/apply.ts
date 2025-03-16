import type { ElementNode } from './types/ElementNode'
import type { Options } from './types/Options'
import type { RootNode } from './types/RootNode'

export const apply =
  (options?: Options | Omit<Options, 'highlight'>) =>
  (node: ElementNode | RootNode) => {
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
          'data-source': source.value,
          'hide-copy-button': options?.hideCopyButton?.toString() ?? 'false',
          'code-copy': JSON.stringify(options?.codeCopy),
          highlight:
            options && 'highlight' in options
              ? (options.highlight?.toString() ?? 'false')
              : 'false'
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
