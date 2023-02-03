<script lang="ts">
	import NavLink from '../atoms/NavLink.svelte'
	import type { NavLinkType } from './navigation'

	export let links: NavLinkType[]
</script>

<nav class="flex gap-4">
	{#each links as { href, label }}
		<NavLink {href}>{label}</NavLink>
	{/each}
</nav>
