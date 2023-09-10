export type Options = {
  onCopy?: (promise: Promise<void>) => unknown
  hideFilename?: boolean
  hideCopyButton?: boolean
}
