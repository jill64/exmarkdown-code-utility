<script lang="ts">
  import { page } from '$app/stores'
  import { codeUtility } from '$lib/index.js'
  import { theme, toast } from '@jill64/npm-demo-layout'
  import { TextArea } from '@jill64/svelte-input'
  import { Markdown } from 'svelte-exmarkdown'
  import { gfmPlugin } from 'svelte-exmarkdown/gfm'
  import { HighlightSwitcher } from 'svelte-highlight-switcher'
  import { define } from 'svelte-qparam'
  import { boolean } from 'svelte-qparam/serde'
  import InvertedToggle from './InvertedToggle.svelte'
  import mock from './mock.md?raw'

  const qparam = define({
    no_highlight: boolean,
    hide_copy: boolean,
    hide_filename: boolean
  })

  $: ({ qparams } = qparam($page.url))
  $: ({ no_highlight, hide_copy, hide_filename } = qparams)

  let md = mock
</script>

{#if !$no_highlight}
  <HighlightSwitcher name={$theme === 'dark' ? 'githubDark' : 'github'} />
{/if}

<main>
  <TextArea
    placeholder="Markdown"
    padding="0.5rem"
    style="background: inherit; color: inherit; border-radius: 0.5rem; border: 1px solid #aaa;"
    bind:value={md}
  />
  <div class="output">
    <aside>
      <InvertedToggle param={no_highlight} label="Highlight" />
      <InvertedToggle param={hide_copy} label="Copy Button" />
      <InvertedToggle param={hide_filename} label="File Name" />
    </aside>
    <output data-testid="markdown-preview">
      <Markdown
        {md}
        plugins={[
          gfmPlugin(),
          codeUtility({
            highlight: !$no_highlight,
            hideCopyButton: $hide_copy,
            hideFilename: $hide_filename,
            codeCopy: {
              color: 'inherit',
              onCopy: (promise) =>
                $toast.promise(promise, {
                  loading: 'Copying...',
                  success: 'Copied!',
                  error: 'Failed to copy'
                })
            }
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
</style>
