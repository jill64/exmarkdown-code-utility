<script lang="ts">
  import { CopyIcon } from 'svelte-feather-icons'
  import { HighlightAuto } from 'svelte-highlight'
  import { options } from '../options.js'

  $: source = $$props['data-source'] as string | undefined

  $: attributes = Object.fromEntries(
    Object.entries($$props).filter(([key]) => key !== 'data-source')
  )

  $: onCopy = () => {
    const str = (source ?? '').replace(/\n$/, '')
    const promise = navigator.clipboard.writeText(str)
    $options?.onCopy?.(promise.then(() => str))
  }
</script>

{#if source && !$options?.hideCopyButton}<button
    title="Copy"
    style:position="absolute"
    class="exmarkdown-code-copy"
    on:click={onCopy}><CopyIcon size="16" /></button
  >{/if}{#if $options?.highlight}<HighlightAuto
    {...attributes}
    code={source}
  />{:else}<code {...attributes}><slot /></code>{/if}

<style>
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    right: 0.25rem;
    top: 0.25rem;
  }
</style>
