<script lang="ts">
	import '../app.postcss'
	import type { NavLinkType } from '../lib/molecules/navigation'
	import Header from '../lib/organisms/Header.svelte'

	const appLinks: NavLinkType[] = [
		{ href: '/about', label: 'About' },
		{ href: '/people', label: 'People' },
		{ href: '/groups', label: 'Groups' },
	]
	const brandLink: NavLinkType = { href: '/', label: 'Conventus' }
</script>

<header>
	<Header {brandLink} {appLinks} />
</header>
<main class="py-2 px-4 flex flex-col h-full">
	<slot />
</main>
