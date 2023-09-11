<script lang="ts">
  import { options } from '../options.js'

  let code: HTMLElement | undefined

  $: filename =
    'class' in $$props && typeof $$props.class === 'string'
      ? $$props.class.split(':')[1]
      : ''

  $: isCode = $$props && code?.parentElement?.tagName === 'PRE'

  $: visibleFilename = !$options?.hideFilename && filename
</script>

<!-- prettier-ignore -->
{#if visibleFilename}<p 
  class="exmarkdown-code-filename"
>{filename}</p>{/if}{#if isCode && !$options?.hideCopyButton}<button
    title="Copy"
    data-md-filename={visibleFilename ? true : null}
    style:position="absolute"
    class="exmarkdown-code-copy"
    on:click={() => {
      const promise = navigator.clipboard.writeText(code?.innerText ?? '')
      $options?.onCopy?.(promise)
    }}>❏</button
  >{/if}<!-- prettier-ignore --><code 
  bind:this={code} 
  {...$$props}
><slot /></code>

<style>
  button {
    user-select: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    padding-bottom: 0.25rem;
    right: 0.25rem;
    width: 2.5rem;
    height: 2.5rem;
    top: 0.25rem;
  }
  button[data-md-filename] {
    top: 1.5rem;
  }
</style>
