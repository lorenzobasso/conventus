<script lang="ts">
	import type { NavLinkType } from '$atoms/nav-link'
	import AppHeader from '$molecules/AppHeader.svelte'

	import { AppBar, AppShell } from '@skeletonlabs/skeleton'
	import '@skeletonlabs/skeleton/styles/all.css'
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css'

	import '../app.postcss'

	const links: NavLinkType[] = [
		{ href: '/', label: 'Home' },
		{ href: '/people', label: 'People' },
		{ href: '/groups', label: 'Groups' },
	]
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<AppHeader {links} />
	</svelte:fragment>
	<div class="p-4">
		<slot />
	</div>
</AppShell>
