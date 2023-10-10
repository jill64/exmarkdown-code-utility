# exmarkdown-code-utility

[![npm](https://img.shields.io/npm/v/exmarkdown-code-utility)](https://npmjs.com/package/exmarkdown-code-utility)
[![CI](https://github.com/jill64/exmarkdown-code-utility/actions/workflows/ci.yml/badge.svg)](https://github.com/jill64/exmarkdown-code-utility/actions/workflows/ci.yml)
[![Integration](https://github.com/jill64/exmarkdown-code-utility/actions/workflows/integration.yml/badge.svg)](https://github.com/jill64/exmarkdown-code-utility/actions/workflows/integration.yml)

Code utility plugin for [svelte-exmarkdown](https://github.com/ssssota/svelte-exmarkdown)

[Demo](https://jill64.github.io/exmarkdown-code-utility)

This plugin adds the following utility to code section in `svelte-exmarkdown`

- Code Copy Button
- Show Filename

## Install

```sh
npm i exmarkdown-code-utility
```

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
