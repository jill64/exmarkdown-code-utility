import type { Node } from './Node'

export type ElementNode = {
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
