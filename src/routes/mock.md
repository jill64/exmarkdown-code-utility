```html:index.html
<h1>exmarkdown-code-utility</h1>
<p>
  Code utility plugin for
  <a href="https://github.com/ssssota/svelte-exmarkdown"> svelte-exmarkdown </a>
</p>
```

```ts:codeUtility.ts
import type { Plugin } from 'svelte-exmarkdown/types'
import { options as store } from './options.js'
import Code from './renderer/Code.svelte'
import Pre from './renderer/Pre.svelte'
import type { Options } from './types/Options.js'

export const codeUtility = (options?: Options): Plugin => {
  store.set(options)

  return {
    renderer: {
      code: Code,
      pre: Pre
    }
  }
}
```
