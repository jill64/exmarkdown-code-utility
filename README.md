# exmarkdown-code-utility

Code utility plugin for [svelte-exmarkdown](https://github.com/ssssota/svelte-exmarkdown)

[Demo](https://jill64.github.io/exmarkdown-code-utility)

This plugin adds the following utility to code section in `svelte-exmarkdown`

- Code Copy Button
- Show Filename

## Install

```sh
npm i @jill64/exmarkdown-code-utility
```

## Example

```svelte
<script>
  import { codeUtility } from '@jill64/exmarkdown-code-utility'
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

## Configuration

| Properties       | Type                                  | Description                                                                                                                                         |
| ---------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onCopy`         | `(promise: Promise<void>) => unknown` | A function that takes a `Promise` as an argument, which is resolved when the copy is complete. Executes when the copy button is clicked. (Optional) |
| `hideFilename`   | `boolean`                             | (Optional)                                                                                                                                          |
| `hideCopyButton` | `boolean`                             | (Optional)                                                                                                                                          |

``
