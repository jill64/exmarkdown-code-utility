<script lang="ts">
  import { CodeCopy } from 'svelte-code-copy'
  import { options } from '../options.svelte.js'

  $: attributes = Object.fromEntries(
    Object.entries($$props).filter(([key]) => key !== 'data-source')
  )
</script>

{#if options?.hideCopyButton}
  <pre><code {...attributes}><slot /></code></pre>
{:else}
  <CodeCopy {...options?.codeCopy}>
    <pre><code {...attributes}><slot /></code></pre>
  </CodeCopy>
{/if}
