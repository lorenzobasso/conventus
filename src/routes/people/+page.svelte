<script lang="ts">
	import { page } from '$app/stores';
	import QueryLoading from '$lib/query/query-loading.svelte';
	import { trpc } from '$lib/trpc/client';

	const people = trpc($page).people.createQuery();
</script>

<QueryLoading query={people} let:data>
	<div class="grid grid-cols-4 gap-3 w-full">
		{#each data as person}
			<div
				class="card variant-ghost-primary p-2 flex-1 hover:shadow-md hover:shadow-secondary-400 hover:transition-shadow"
			>
				<p class="text-xl font-bold">{person.surname}, {person.name}</p>
				<p class="text-sm brightness-90">{person.email}</p>
				<p class="pt-1 text-md">
					Located in: {person.location.displayName || person.location.name}
				</p>
			</div>
		{/each}
	</div>
</QueryLoading>
