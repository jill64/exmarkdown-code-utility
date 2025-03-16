<script lang="ts">
  import { attempt } from '@jill64/attempt'
  import { CodeCopy } from 'svelte-code-copy'
  import { HighlightAuto } from 'svelte-highlight'

  let props = $props()

  $inspect(props)

  let source = $derived(props['data-source'] ?? '')
  let hideCopyButton = $derived(props['hide-copy-button'] === 'true')
  let codeCopy = $derived(attempt(() => JSON.parse(props['code-copy']), {}))
  let highlight = $derived(props['highlight'] === 'true')
  let children = $derived(props['children'])

  $inspect({ source, hideCopyButton, codeCopy, highlight, children })

  let attributes = $derived(
    Object.fromEntries(
      Object.entries(props).filter(
        ([key]) =>
          key !== 'data-source' &&
          key !== 'hide-copy-button' &&
          key !== 'code-copy' &&
          key !== 'highlight' &&
          key !== 'children'
      )
    )
  )
</script>

{#snippet highlighted()}
  <HighlightAuto {...attributes} code={source} />
{/snippet}

{#snippet noHighlighted()}
  <pre><code {...attributes}>{@render children()}</code></pre>
{/snippet}

{#if hideCopyButton}
  {#if highlight}
    {@render highlighted()}
  {:else}
    {@render noHighlighted()}
  {/if}
{:else}
  <CodeCopy {...codeCopy}>
    {#if highlight}
      {@render highlighted()}
    {:else}
      {@render noHighlighted()}
    {/if}
  </CodeCopy>
{/if}
