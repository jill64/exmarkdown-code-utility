<script lang="ts">
  import { attempt } from '@jill64/attempt'
  import { CodeCopy } from 'svelte-code-copy'

  let props = $props()

  $inspect(props)

  let hideCopyButton = $derived(props['hide-copy-button'] === 'true')
  let codeCopy = $derived(attempt(() => props['code-copy'], {}))
  let children = $derived(props['children'])

  let attributes = $derived(
    Object.fromEntries(
      Object.entries(props).filter(
        ([key]) =>
          key !== 'data-source' &&
          key !== 'hide-copy-button' &&
          key !== 'code-copy' &&
          key !== 'children'
      )
    )
  )
</script>

{#snippet code()}
  <pre><code {...attributes}>{@render children()}</code></pre>
{/snippet}
{#if hideCopyButton}
  {@render code()}
{:else}
  <CodeCopy {...codeCopy}>
    {@render code()}
  </CodeCopy>
{/if}
