<script lang="ts">
  import { codeUtility } from '$lib/index.js'
  import { TextArea } from '@jill64/svelte-input'
  import { toast, Toaster } from '@jill64/svelte-toast'
  import { Markdown } from 'svelte-exmarkdown'
  import { gfmPlugin } from 'svelte-exmarkdown/gfm'
  import mock from './mock.md?raw'

  let md = mock
</script>

<Toaster />
<h1>exmarkdown-code-utility</h1>
<main>
  <TextArea
    placeholder="Markdown"
    style="background: inherit; color: inherit;"
    bind:value={md}
  />
  <div data-testid="markdown-preview">
    <Markdown
      {md}
      plugins={[
        gfmPlugin(),
        codeUtility({
          onCopy: (promise) =>
            $toast.promise(promise, {
              loading: 'Copying...',
              success: 'Copied!',
              error: 'Failed to copy'
            })
        })
      ]}
    />
  </div>
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
  :global(body) {
    font-family: sans-serif;
  }
  @media (prefers-color-scheme: dark) {
    :global(body) {
      background: #222;
      color: #eee;
    }
  }
  :global(.exmarkdown-code-filename) {
    text-decoration: underline;
  }
  :global(.exmarkdown-code-copy) {
    cursor: pointer;
    margin-left: 0.5rem;
    background: inherit;
    color: inherit;
    border: solid 1px #aaa;
    border-radius: 0.5rem;
  }
</style>
