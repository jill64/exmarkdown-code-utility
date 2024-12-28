export type Options = {
  /**
   * Hide filename from the code block.
   * @default false
   */
  hideFilename?: boolean

  /**
   * Hide copy button from the code block.
   * @default false
   */
  hideCopyButton?: boolean

  /**
   * Enable code block highlighting.
   * You must set the style in your application code.
   * @see https://github.com/metonym/svelte-highlight?tab=readme-ov-file#styling
   * @default false
   */
  highlight?: boolean

  /**
   * Tag name used for filename markup.
   * @default 'div'
   */
  filenameTag?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  /**
   * Options of `svelte-code-copy`.
   * @default {}
   * @see https://github.com/jill64/svelte-code-copy#readme
   */
  codeCopy?: {
    onCopy?: (promise: Promise<string>) => void
    size?: number
    background?: string
    color?: string
    success?: string
    error?: string
    top?: string
    right?: string
    border?: string
    padding?: string
    borderRadius?: string
    margin?: string
    effect?: 'none' | 'push' | 'pop'
    duration?: number
  }
}
