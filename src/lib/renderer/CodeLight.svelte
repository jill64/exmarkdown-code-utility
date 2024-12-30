<script lang="ts">
  import { CodeCopy } from 'svelte-code-copy'
  import { options } from '../options.svelte.js'

  let allProps = $props()

  let attributes = $derived(
    Object.fromEntries(
      Object.entries(allProps).filter(([key]) => key !== 'data-source')
    )
  )
</script>

{#snippet codeBlock()}
  <pre><code {...attributes}>{@render allProps.children()}</code></pre>
{/snippet}

{#if options?.hideCopyButton}
  {@render codeBlock()}
{:else}
  <CodeCopy {...options?.codeCopy}>
    {@render codeBlock()}
  </CodeCopy>
{/if}
