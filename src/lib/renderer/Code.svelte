<script lang="ts">
  import { CodeCopy } from 'svelte-code-copy'
  import { HighlightAuto } from 'svelte-highlight'
  import { options } from '../options.js'

  $: source = $$props['data-source'] ?? ''

  $: attributes = Object.fromEntries(
    Object.entries($$props).filter(([key]) => key !== 'data-source')
  )
</script>

{#if $options?.hideCopyButton}
  {#if $options?.highlight}
    <HighlightAuto {...attributes} code={source} />
  {:else}
    <pre><code {...attributes}><slot /></code></pre>
  {/if}
{:else}
  <CodeCopy {...$options?.codeCopy}>
    {#if $options?.highlight}
      <HighlightAuto {...attributes} code={source} />
    {:else}
      <pre><code {...attributes}><slot /></code></pre>
    {/if}
  </CodeCopy>
{/if}
