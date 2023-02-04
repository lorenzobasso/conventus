<script lang="ts">
	import { API } from '$api/api'
	import type { Person } from '$api/api-response-types'
	import { createQuery } from '@tanstack/svelte-query'
	import { Check, CircleBackslash, Loop } from 'svelte-radix'

	const query = createQuery<Person[], Error>({ queryKey: ['people'], queryFn: API.people.getAll })
</script>

<div>
	{#if $query.isLoading}
		<p>Loading...</p>
	{:else if $query.isError}
		<p>Error: {$query.error.message}</p>
	{:else if $query.isSuccess}
		<section class="grid grid-cols-3 gap-2">
			{#each [1, 2, 3] as _}
				{#each $query.data as person (person.id)}
					<div class="bg-surface-d flex flex-col px-4 py-2 rounded-lg relative">
						<p>{person.firstName}, {person.lastName}</p>
						<p>{person.email}</p>
						{#if person.location}
							<p>Location: {person.location.name}</p>
						{/if}
						<div class="flex gap-4 absolute top-2 right-2">
							<Check />
							<Loop />
							<CircleBackslash />
						</div>
					</div>
				{/each}
			{/each}
		</section>
	{/if}
</div>
