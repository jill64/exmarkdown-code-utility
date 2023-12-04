import { init } from '@jill64/sentry-sveltekit-cloudflare/server'
import { onRender } from '@jill64/svelte-suite'

const { onHandle, onError } = init(
  'https://9d63d41176bf79e3b810b2d19f3cc3fd@o4505814639312896.ingest.sentry.io/4506168386650112'
)

export const handle = onHandle(onRender())
export const handleError = onError()
