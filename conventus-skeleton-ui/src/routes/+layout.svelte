<script lang="ts">
	import type { NavLinkType } from '$atoms/nav-link'
	import AppHeader from '$molecules/AppHeader.svelte'

	import { AppShell, Modal, Toast } from '@skeletonlabs/skeleton'
	import '@skeletonlabs/skeleton/styles/all.css'
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css'
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query'

	import '../app.postcss'

	const queryClient = new QueryClient()

	const links: NavLinkType[] = [
		{ href: '/', label: 'Home' },
		{ href: '/people', label: 'People' },
		{ href: '/groups', label: 'Groups' },
	]
</script>

<QueryClientProvider client={queryClient}>
	<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
		<svelte:fragment slot="header">
			<AppHeader {links} />
		</svelte:fragment>
		<div class="p-4 max-w-6xl mx-auto">
			<slot />
		</div>
		<Modal />
		<Toast />
	</AppShell>
</QueryClientProvider>
