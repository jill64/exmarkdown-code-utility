import { writable } from 'svelte/store'
import type { Options } from './types/Options.js'

export const options = writable<Options | undefined>()
