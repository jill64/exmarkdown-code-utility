import type { Options } from './types/Options.js'

let store = $state<Options>({
  hideFilename: false,
  hideCopyButton: false,
  highlight: false,
  filenameTag: 'div',
  codeCopy: {}
})

export const options = {
  get hideFilename() {
    return store.hideFilename
  },
  set hideFilename(value) {
    store.hideFilename = value
  },
  get hideCopyButton() {
    return store.hideCopyButton
  },
  set hideCopyButton(value) {
    store.hideCopyButton = value
  },
  get highlight() {
    return store.highlight
  },
  set highlight(value) {
    store.highlight = value
  },
  get filenameTag() {
    return store.filenameTag
  },
  set filenameTag(value) {
    store.filenameTag = value
  },
  get codeCopy() {
    return store.codeCopy
  },
  set codeCopy(value) {
    store.codeCopy = value
  }
}
