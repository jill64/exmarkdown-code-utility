<!----- BEGIN GHOST DOCS HEADER ----->

# exmarkdown-code-utility

[![npm-version](https://img.shields.io/npm/v/exmarkdown-code-utility)](https://npmjs.com/package/exmarkdown-code-utility) [![npm-license](https://img.shields.io/npm/l/exmarkdown-code-utility)](https://npmjs.com/package/exmarkdown-code-utility) [![npm-download-month](https://img.shields.io/npm/dm/exmarkdown-code-utility)](https://npmjs.com/package/exmarkdown-code-utility) [![npm-min-size](https://img.shields.io/bundlephobia/min/exmarkdown-code-utility)](https://npmjs.com/package/exmarkdown-code-utility) [![ci.yml](https://github.com/jill64/exmarkdown-code-utility/actions/workflows/ci.yml/badge.svg)](https://github.com/jill64/exmarkdown-code-utility/actions/workflows/ci.yml) [![website](https://img.shields.io/website?up_message=working&down_message=down&url=https%3A%2F%2Fexmarkdown-code-utility.jill64.dev)](https://exmarkdown-code-utility.jill64.dev)

❏ Code utility plugin for svelte-exmarkdown

## [Demo](https://exmarkdown-code-utility.jill64.dev)

<!----- END GHOST DOCS HEADER ----->

This plugin adds the following utility to code section in [svelte-exmarkdown](https://github.com/ssssota/svelte-exmarkdown)

- Code Copy Button
- Show Filename
- Code Highlighting by [svelte-highlight](https://github.com/metonym/svelte-highlight)

## Installation

```bash
npm i exmarkdown-code-utility
```

## Example

```svelte
<script>
  import { codeUtility } from 'exmarkdown-code-utility'
  import { Markdown } from 'svelte-exmarkdown'
</script>

<Markdown
  plugins={[
    // ...
    codeUtility({
      // Plugin Options
    })
  ]}
/>

<style>
  .exmarkdown-code-filename {
    /* Style of Filename section (<div/>) */
  }
</style>
```

[Full Plugin Options](./src/lib/types/Options.ts)

This will result in the following conversions

Markdown

````md
```html:filename
<!-- ... -->
```
````

↓

HTML

```html
<div class="exmarkdown-code-filename">filename</div>
<div>
  <button class="exmarkdown-code-copy">❏</button>
  <pre>
    <code>
      <!-- ... -->
    </code>
  </pre>
</div>
```

## Code Highlighting

This plugin uses [svelte-highlight](https://github.com/metonym/svelte-highlight) for code highlighting.

### Usage

1. Enable the `highlight` option

```svelte
<script>
  import { Markdown } from 'svelte-exmarkdown'
  import { codeUtility } from 'exmarkdown-code-utility'
</script>

<Markdown
  plugins={[
    codeUtility({
      highlight: true
    })
  ]}
/>
```

2. Import the stylesheet

> [!TIP]
> See [svelte-highlight/styling](https://github.com/metonym/svelte-highlight?tab=readme-ov-file#styling) for details.

```svelte
<script>
  import 'exmarkdown-code-utility/styles/github.css'
</script>
```

or

```svelte
<script lang="ts">
  import github from 'exmarkdown-code-utility/styles/github'
</script>

<svelte:head>
  {@html github}
</svelte:head>
```

> [!CAUTION] > [`@html` is dangerous](https://svelte.dev/docs/special-tags#html).  
> If you need to switch dynamic styles, use of [svelte-highlight-switcher](https://github.com/jill64/svelte-highlight-switcher#readme) is recommended to prevent unexpected accidents.

## Migration from v2

Now internal using to [svelte-code-copy](https://github.com/jill64/svelte-code-copy#readme) for code copy button.

- `onCopy` option has been merged into `codeCopy`.
- `codeButton` option has been merged into `copy`.
- Omit styling by `exmarkdown-code-copy`. Use instead `codeCopy` option.
