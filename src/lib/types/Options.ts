export type Options = {
  /**
   * The argument is a Promise that will be resolved when the copy is complete.
   * The Promise contains the copied text.
   * Executes when the copy button is clicked.
   * @default undefined
   */
  onCopy?: (promise: Promise<string>) => unknown

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
}
