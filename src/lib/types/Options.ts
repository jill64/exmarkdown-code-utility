export type Options = {
  /**
   * The argument is a Promise that will be resolved when the copy is complete.
   * The Promise contains the copied text.
   * Executes when the copy button is clicked.
   * @default undefined
   */
  onCopy?: (promise: Promise<string>) => unknown

  /**
   * Hide filename from the code block
   * @default false
   */
  hideFilename?: boolean

  /**
   * Hide copy button from the code block
   * @default false
   */
  hideCopyButton?: boolean
}
