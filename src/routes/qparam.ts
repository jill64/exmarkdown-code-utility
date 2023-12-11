import { define } from 'svelte-qparam'
import { boolean } from 'svelte-qparam/serde'

export const qparam = define({
  no_highlight: boolean,
  hide_copy: boolean,
  hide_filename: boolean
})
