export type Options = {
  /**
   * A function that takes a `Promise` as an argument, which is resolved when the copy is complete. Executes when the copy button is clicked.
   * @default undefined
   */
  onCopy?: (promise: Promise<void>) => unknown

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
