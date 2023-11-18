<script lang="ts">
  import { codeUtility } from '$lib/index.js'
  import { TextArea } from '@jill64/svelte-input'
  import { toast } from '@jill64/svelte-toast'
  import { Markdown } from 'svelte-exmarkdown'
  import { gfmPlugin } from 'svelte-exmarkdown/gfm'
  import mock from './mock.md?raw'

  let md = mock
</script>

<main>
  <TextArea
    placeholder="Markdown"
    padding="0.5rem"
    style="background: inherit; color: inherit; border-radius: 0.5rem; border: 1px solid #aaa;"
    bind:value={md}
  />
  <output data-testid="markdown-preview">
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
  </output>
</main>

<style>
  main {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 640px) {
    main {
      grid-template-columns: 1fr;
    }
  }
  output {
    border: 1px solid #aaa;
    padding: 0.5rem;
    border-radius: 0.5rem;
    overflow-x: auto;
  }
  :global(.exmarkdown-code-filename) {
    font-size: large;
    font-weight: bold;
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
  :global(.exmarkdown-code-copy):hover {
    background: rgba(0, 0, 0, 0.1);
  }
  :global(.exmarkdown-code-copy):active {
    background: rgba(0, 0, 0, 0.2);
  }
  :global(.dark .exmarkdown-code-copy):hover {
    background: rgba(255, 255, 255, 0.1);
  }
  :global(.dark .exmarkdown-code-copy):active {
    background: rgba(255, 255, 255, 0.2);
  }
</style>
