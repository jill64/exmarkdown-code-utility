import { PUBLIC_SENTRY_DSN } from '$env/static/public'
import { clientInit } from '@jill64/sentry-sveltekit-cloudflare'

const onError = clientInit(PUBLIC_SENTRY_DSN)

export const handleError = onError()
