<script lang="ts">
  import { page } from '$app/stores'
  import { codeUtility } from '$lib'
  import { toast } from '@jill64/npm-demo-layout'
  import { ToggleSwitch } from '@jill64/svelte-input'
  import { Markdown } from 'svelte-exmarkdown'
  import { gfmPlugin } from 'svelte-exmarkdown/gfm'
  import mock from './mock.md?raw'
  import { qparam } from './qparam'

  let { qparams } = $derived(qparam($page.url))

  let md = $state(mock)
</script>

<main>
  <textarea
    placeholder="Markdown"
    style="field-sizing: content; padding: 0.5rem; background: inherit; color: inherit; border-radius: 0.5rem; border: 1px solid #aaa;"
    bind:value={md}
  ></textarea>
  <div class="output">
    <aside>
      <ToggleSwitch
        value={!qparams.no_highlight}
        onChange={(x) => {
          qparams.no_highlight = !x
        }}
      >
        <span style:margin-left="0.5rem">Highlight</span>
      </ToggleSwitch>
      <ToggleSwitch
        value={!qparams.hide_copy}
        onChange={(x) => {
          qparams.hide_copy = !x
        }}
      >
        <span style:margin-left="0.5rem">Copy Button</span>
      </ToggleSwitch>
      <ToggleSwitch
        value={!qparams.hide_filename}
        onChange={(x) => {
          qparams.hide_filename = !x
        }}
      >
        <span style:margin-left="0.5rem">File Name</span>
      </ToggleSwitch>
    </aside>
    <output data-testid="markdown-preview">
      <Markdown
        {md}
        plugins={[
          gfmPlugin(),
          codeUtility({
            highlight: !qparams.no_highlight,
            hideCopyButton: qparams.hide_copy,
            hideFilename: qparams.hide_filename,
            codeCopy: {
              color: 'inherit',
              onCopy: (promise) =>
                toast.promise(promise, {
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
