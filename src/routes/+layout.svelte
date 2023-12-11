<script lang="ts">
  import { page } from '$app/stores'
  import { Layout } from '@jill64/npm-demo-layout'
  import README from '../../README.md?raw'
  import packageJson from '../../package.json'
  import { qparam } from './qparam'

  $: ({ qparams } = qparam($page.url))
  $: ({ no_highlight } = qparams)
</script>

<Layout disableThemeSwitcher={$no_highlight} {README} {packageJson}>
  <slot />
</Layout>
