import type { SvelteComponent } from 'svelte'
import type { CodeCopy } from 'svelte-code-copy'

export type Options = {
  /**
   * Hide filename from the code block.
   * @default false
   */
  hideFilename?: boolean

  /**
   * Hide copy button from the code block.
   * @default false
   */
  hideCopyButton?: boolean

  /**
   * Enable code block highlighting.
   * You must set the style in your application code.
   * @see https://github.com/metonym/svelte-highlight?tab=readme-ov-file#styling
   * @default false
   */
  highlight?: boolean

  /**
   * Tag name used for filename markup.
   * @default 'div'
   */
  filenameTag?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  /**
   * Options of `svelte-code-copy`.
   * @default 'button'
   * @see https://github.com/jill64/svelte-code-copy#readme
   */
  codeCopy?: CodeCopy extends SvelteComponent<infer U> ? U : never
}
