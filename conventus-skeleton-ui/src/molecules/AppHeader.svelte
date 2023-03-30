<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton'

	import NavLink from '$atoms/NavLink.svelte'
	import type { NavLinkType } from '$atoms/nav-link'

	export let appName = 'Coventus'
	export let links: NavLinkType[]
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<strong class="text-xl">
			<a href="/">{appName}</a>
		</strong>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		{#each links as { href, label }}
			<NavLink {href}>{label}</NavLink>
		{/each}
	</svelte:fragment>
</AppBar>
