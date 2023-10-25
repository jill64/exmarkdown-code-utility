<script lang="ts">
  import { codeUtility } from '$lib/index.js'
  import { TextArea } from '@jill64/svelte-input'
  import { toast, Toaster } from '@jill64/svelte-toast'
  import 'highlight.js/styles/github-dark.css'
  import { Markdown } from 'svelte-exmarkdown'
  import { gfmPlugin } from 'svelte-exmarkdown/gfm'
  import mock from './mock.md?raw'

  let md = mock
</script>

<Toaster />
<header>
  <h1>exmarkdown-code-utility</h1>
  <a href="https://github.com/jill64/exmarkdown-code-utility">GitHub</a>
</header>
<main>
  <TextArea
    placeholder="Markdown"
    style="background: inherit; color: inherit; width: 100%; max-width: 600px; min-width: 300px;"
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    grid-gap: 1rem;
  }
  div {
    width: 100%;
    min-width: 300px;
    max-width: 600px;
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
  @media (prefers-color-scheme: dark) {
    :global(.exmarkdown-code-copy):hover {
      background: rgba(255, 255, 255, 0.1);
    }
    :global(.exmarkdown-code-copy):active {
      background: rgba(255, 255, 255, 0.2);
    }
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem;
  }
  header a {
    color: inherit;
    text-decoration: none;
  }
  header a:hover {
    text-decoration: underline;
  }
</style>
