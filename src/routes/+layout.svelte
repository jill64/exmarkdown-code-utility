<script lang="ts">
  import { page } from '$app/state'
  import { Layout } from '@jill64/npm-demo-layout'
  import README from '../../README.md?raw'
  import packageJson from '../../package.json'
  import { qparam } from './qparam'

  let { children } = $props()

  let { qparams: q } = $derived(qparam(page.url))
</script>

<Layout disableThemeSwitcher={q.no_highlight} {README} {packageJson}>
  {@render children()}
</Layout>
