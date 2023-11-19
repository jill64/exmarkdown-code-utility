<script lang="ts">
  import { ToggleSwitch } from '@jill64/svelte-input'
  import type { Qparam } from 'svelte-qparam/types'

  export let param: Qparam<boolean>
  export let label: string
</script>

<ToggleSwitch
  value={!$param}
  onChange={(x) => {
    $param = !x
  }}
>
  <span style:margin-left="0.5rem">{label}</span>
</ToggleSwitch>
