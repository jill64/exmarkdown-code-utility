<script lang="ts">
  import { ToggleSwitch } from '@jill64/svelte-suite/input'
  import type { Qparam } from '@jill64/svelte-suite'

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
