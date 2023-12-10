<script lang="ts">
  import { Layout } from '@jill64/npm-demo-layout'
  import packageJson from '../../package.json'
</script>

<Layout {packageJson}>
  <slot />
</Layout>
