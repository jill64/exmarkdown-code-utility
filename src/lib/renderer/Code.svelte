<script lang="ts">
  import { observable } from '@jill64/async-observer'
  import { CheckIcon, CopyIcon, LoaderIcon, XIcon } from 'svelte-feather-icons'
  import { HighlightAuto } from 'svelte-highlight'
  import { options } from '../options.js'

  $: source = $$props['data-source'] as string | undefined

  $: attributes = Object.fromEntries(
    Object.entries($$props).filter(([key]) => key !== 'data-source')
  )

  const { status, observed } = observable()

  $: onCopy = observed(async () => {
    const str = (source ?? '').replace(/\n$/, '')
    const promise = navigator.clipboard.writeText(str)
    $options?.onCopy?.(promise.then(() => str))
    await promise
  })

  $: size = $options?.copyButton?.iconSize?.toString() ?? '16'
  $: defaultColor = $options?.copyButton?.iconColor?.default ?? 'inherit'
  $: success = $options?.copyButton?.iconColor?.success ?? 'green'
  $: error = $options?.copyButton?.iconColor?.error ?? 'red'
</script>

{#if source && !$options?.hideCopyButton}<button
    title="Copy"
    style:position="absolute"
    style:color={$status === 'FULFILLED'
      ? success
      : $status === 'REJECTED'
      ? error
      : defaultColor}
    class="exmarkdown-code-copy"
    on:click={onCopy}
    >{#if $status === 'IDLE'}<CopyIcon
        {size}
      />{:else if $status === 'PENDING'}<LoaderIcon
        {size}
      />{:else if $status === 'FULFILLED'}<CheckIcon {size} />{:else}<XIcon
        {size}
      />{/if}</button
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
