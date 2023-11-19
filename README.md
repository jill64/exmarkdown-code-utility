<!----- BEGIN GHOST DOCS HEADER ----->

# exmarkdown-code-utility

[![npm-version](https://img.shields.io/npm/v/exmarkdown-code-utility)](https://npmjs.com/package/exmarkdown-code-utility) [![npm-license](https://img.shields.io/npm/l/exmarkdown-code-utility)](https://npmjs.com/package/exmarkdown-code-utility) [![npm-download-month](https://img.shields.io/npm/dm/exmarkdown-code-utility)](https://npmjs.com/package/exmarkdown-code-utility) [![npm-min-size](https://img.shields.io/bundlephobia/min/exmarkdown-code-utility)](https://npmjs.com/package/exmarkdown-code-utility) [![ci.yml](https://github.com/jill64/exmarkdown-code-utility/actions/workflows/ci.yml/badge.svg)](https://github.com/jill64/exmarkdown-code-utility/actions/workflows/ci.yml) [![website](https://img.shields.io/website?up_message=working&down_message=down&url=https%3A%2F%2Fexmarkdown-code-utility.jill64.dev)](https://exmarkdown-code-utility.jill64.dev)

❏ Code utility plugin for svelte-exmarkdown

## [Demo](https://exmarkdown-code-utility.jill64.dev)

## Installation

```sh
npm i exmarkdown-code-utility
```

<!----- END GHOST DOCS HEADER ----->

This plugin adds the following utility to code section in [svelte-exmarkdown](https://github.com/ssssota/svelte-exmarkdown)

- Code Copy Button
- Show Filename
- Code Highlighting

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
  .exmarkdown-code-copy {
    /* Style of Copy Button (<button/>) */
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
  <button class="exmarkdown-code-copy">
    ❏
  </button>
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

```svelte
<script>
  import 'exmarkdown-code-utility/styles/github.css'
</script>
```

or

```svelte
<script lang="ts">
  import github from 'svelte-highlight/styles/github'
</script>

<svelte:head>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html github}
</svelte:head>
```

See [svelte-highlight/styling](https://github.com/metonym/svelte-highlight?tab=readme-ov-file#styling) for details.
