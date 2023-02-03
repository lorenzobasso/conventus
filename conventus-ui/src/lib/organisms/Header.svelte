<script lang="ts">
	import Navigation from '../molecules/Navigation.svelte'
	import type { NavLinkType } from '../molecules/navigation'

	export let brandLink: NavLinkType
	export let appLinks: NavLinkType[]
</script>

<div class="flex w-full items-center justify-between py-2">
	<a href="/">
		<span class="self-center whitespace-nowrap text-2xl font-semibold">
			{brandLink.label}
		</span>
	</a>
	<Navigation links={appLinks} />
</div>
