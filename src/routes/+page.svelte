<script lang="ts">
  import { page } from '$app/stores'
  import { codeUtility } from '$lib/index.js'
  import { theme } from '@jill64/svelte-dark-theme'
  import { TextArea, ToggleSwitch } from '@jill64/svelte-input'
  import { toast } from '@jill64/svelte-toast'
  import { Markdown } from 'svelte-exmarkdown'
  import { gfmPlugin } from 'svelte-exmarkdown/gfm'
  import github from 'svelte-highlight/styles/github'
  import githubDark from 'svelte-highlight/styles/github-dark'
  import { define } from 'svelte-qparam'
  import { boolean } from 'svelte-qparam/converter'
  import mock from './mock.md?raw'

  const qparam = define({
    highlight: boolean,
    copy_button: boolean,
    filename: boolean
  })

  $: ({ qparams } = qparam($page.url))
  $: ({ highlight, copy_button, filename } = qparams)

  let md = mock
</script>

<svelte:head>
  {#if highlight}
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html $theme === 'dark' ? githubDark : github}
  {/if}
</svelte:head>

<main>
  <TextArea
    placeholder="Markdown"
    padding="0.5rem"
    style="background: inherit; color: inherit; border-radius: 0.5rem; border: 1px solid #aaa;"
    bind:value={md}
  />
  <div class="output">
    <aside>
      <ToggleSwitch value={$highlight} onChange={highlight.set}>
        <span style:margin-left="0.5rem">Highlight</span>
      </ToggleSwitch>
      <ToggleSwitch value={$copy_button} onChange={copy_button.set}>
        <span style:margin-left="0.5rem">Copy Button</span>
      </ToggleSwitch>
      <ToggleSwitch value={$filename} onChange={filename.set}>
        <span style:margin-left="0.5rem">File Name</span>
      </ToggleSwitch>
    </aside>
    <output data-testid="markdown-preview">
      <Markdown
        {md}
        plugins={[
          gfmPlugin(),
          codeUtility({
            highlight: $highlight,
            hideCopyButton: !$copy_button,
            hideFilename: !$filename,
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
  </div>
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
  .output {
    padding: 0.5rem;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  aside {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
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
    border-radius: 0.5rem;
    border: none;
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
