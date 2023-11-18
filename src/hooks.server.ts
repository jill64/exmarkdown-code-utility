import { serverInit } from '@jill64/sentry-sveltekit-cloudflare'

const { onHandle, onError } = serverInit(
  'https://9d63d41176bf79e3b810b2d19f3cc3fd@o4505814639312896.ingest.sentry.io/4506168386650112'
)

export const handle = onHandle()
export const handleError = onError()
