<script lang="ts">
	import { page } from '$app/stores';
	import QueryLoading from '$lib/query/query-loading.svelte';
	import { trpc } from '$lib/trpc/client';

	const locations = trpc($page).locations.createQuery();
</script>

<QueryLoading query={locations} let:data>
	<div class="grid grid-cols-4 gap-3 w-full">
		{#each data as location}
			<div
				class="card variant-ghost-primary p-2 flex-1 hover:shadow-md hover:shadow-secondary-400 hover:transition-shadow"
			>
				<p class="text-xl font-bold">{location.displayName || location.name}</p>
				<p class="text-sm brightness-90">{location.name}</p>
				<p class="pt-1">Time zone: {location.timeZone}</p>
			</div>
		{/each}
	</div>
</QueryLoading>
