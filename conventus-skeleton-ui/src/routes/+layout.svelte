<script>
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css'
	import '@skeletonlabs/skeleton/styles/all.css'
	import '../app.postcss'
	import { AppShell, AppBar } from '@skeletonlabs/skeleton'
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl">Conventus</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div>here be links</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
