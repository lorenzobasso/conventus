import type { ToastSettings } from '@skeletonlabs/skeleton'

export const toastTimeout = 3000

const commonSettings: Partial<ToastSettings> = {
	autohide: true,
	timeout: toastTimeout,
}

export const errorToastSettings: Partial<ToastSettings> = {
	...commonSettings,
	preset: 'error',
}
