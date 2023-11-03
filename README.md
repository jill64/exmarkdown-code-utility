<!----- BEGIN GHOST DOCS HEADER ----->

# exmarkdown-code-utility

[![npm-version](https://img.shields.io/npm/v/exmarkdown-code-utility)](https://npmjs.com/package/exmarkdown-code-utility) [![npm-license](https://img.shields.io/npm/l/exmarkdown-code-utility)](https://npmjs.com/package/exmarkdown-code-utility) [![npm-download-month](https://img.shields.io/npm/dm/exmarkdown-code-utility)](https://npmjs.com/package/exmarkdown-code-utility) [![npm-min-size](https://img.shields.io/bundlephobia/min/exmarkdown-code-utility)](https://npmjs.com/package/exmarkdown-code-utility) [![ci.yml](https://github.com/jill64/exmarkdown-code-utility/actions/workflows/ci.yml/badge.svg)](https://github.com/jill64/exmarkdown-code-utility/actions/workflows/ci.yml) [![deploy.yml](https://github.com/jill64/exmarkdown-code-utility/actions/workflows/deploy.yml/badge.svg)](https://github.com/jill64/exmarkdown-code-utility/actions/workflows/deploy.yml) [![github-pages](https://img.shields.io/website?up_message=working&down_message=down&url=https%3A%2F%2Fjill64.github.io%2Fexmarkdown-code-utility%2F)](https://jill64.github.io/exmarkdown-code-utility/)

Code utility plugin for svelte-exmarkdown

## [Demo](https://jill64.github.io/exmarkdown-code-utility/)

## Install

```sh
npm i exmarkdown-code-utility
```

<!----- END GHOST DOCS HEADER ----->

This plugin adds the following utility to code section in [svelte-exmarkdown](https://github.com/ssssota/svelte-exmarkdown)

- Code Copy Button
- Show Filename

## Example

```svelte
<script>
  import { codeUtility } from 'exmarkdown-code-utility'
  import { Markdown } from 'svelte-exmarkdown'

  // ...
</script>

<Markdown
  md={/*...*/}
  plugins={[
    // ...
    codeUtility({
      // Configuration (optional)
    })
  ]}
/>

<style>
  .exmarkdown-code-filename {
    /* Style of Filename section (<p/>) */
  }
  .exmarkdown-code-copy {
    /* Style of Copy Button (<button/>) */
  }
  .exmarkdown-code-copy[data-md-filename] {
    /* Styling when visible filename */
  }
</style>
```

[Plugin Config Types](./src/lib/types/Options.ts)
