<script lang="ts">
  import { options } from '../options.js'

  let code: HTMLElement | undefined

  $: fileName =
    'class' in $$props && typeof $$props.class === 'string'
      ? $$props.class.split(':')[1]
      : ''

  $: isCode = $$props && code?.parentElement?.tagName === 'PRE'
</script>

{#if fileName && !$options?.hideFilename}<p class="exmarkdown-code-filename">
    {fileName}
  </p>{/if}{#if isCode && !$options?.hideCopyButton}<button
    title="Copy"
    style:top="{fileName ? '1.5' : '0.25'}rem"
    class="exmarkdown-code-copy"
    on:click={() => {
      const promise = navigator.clipboard.writeText(code?.innerText ?? '')
      $options?.onCopy?.(promise)
    }}>❏</button
  >{/if}<code bind:this={code} {...$$props}><slot /></code>

<style>
  button {
    user-select: none;
    position: absolute;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    padding-bottom: 0.25rem;
    right: 0.25rem;
    width: 2.5rem;
    height: 2.5rem;
  }
</style>
