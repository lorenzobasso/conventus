<script lang="ts">
	import NavLink from './links/nav-link.svelte';

	const navMenuEntries = [
		{
			href: '/',
			label: 'Groups'
		},
		{
			href: '/locations',
			label: 'Locations'
		},
		{
			href: '/people',
			label: 'People'
		}
	];
</script>

<header class="mt-2 mb-4">
	<nav class="flex gap-3">
		{#each navMenuEntries as entry}
			<NavLink {...entry} />
		{/each}
	</nav>
</header>
