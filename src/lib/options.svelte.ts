let store = $state({
  hideCopyButton: false,
  highlight: true,
  codeCopy: {}
})

export const options = {
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
  get codeCopy() {
    return store.codeCopy
  },
  set codeCopy(value) {
    store.codeCopy = value
  }
}
