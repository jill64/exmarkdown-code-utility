<script lang="ts">
  import { CodeCopy } from 'svelte-code-copy'
  import { HighlightAuto } from 'svelte-highlight'
  import { options } from '../options.svelte.js'

  let allProps = $props()

  let source = $derived(allProps['data-source'] ?? '')

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
  {#if options?.highlight}
    <HighlightAuto {...attributes} code={source} />
  {:else}
    {@render codeBlock()}
  {/if}
{:else}
  <CodeCopy {...options?.codeCopy}>
    {#if options?.highlight}
      <HighlightAuto {...attributes} code={source} />
    {:else}
      {@render codeBlock()}
    {/if}
  </CodeCopy>
{/if}
