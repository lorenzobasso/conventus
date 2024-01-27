import type { Router } from '$lib/trpc/router';
import { createTRPCClient, type TRPCClientInit } from 'trpc-sveltekit';

import { svelteQueryWrapper } from 'trpc-svelte-query-adapter';
import { getQueryClientContext, QueryClient } from '@tanstack/svelte-query';

let browserClient: ReturnType<typeof svelteQueryWrapper<Router>>;

export function trpc(init?: TRPCClientInit, queryClient?: QueryClient) {
	const isBrowser = typeof window !== 'undefined';
	if (isBrowser && browserClient) return browserClient;

	const client = svelteQueryWrapper<Router>({
		client: createTRPCClient<Router>({ init }),
		queryClient: queryClient ?? getQueryClientContext()
	});

	if (isBrowser) browserClient = client;

	return client;
}
