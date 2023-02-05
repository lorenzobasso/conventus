<script lang="ts">
	import type { Person } from '$api/api-response-types'
	import { useDeletePerson } from '$api/queries/use-people'

	import { Trash } from 'svelte-radix'

	export let person: Person

	const deletePersonMutation = useDeletePerson()
</script>

<section class="card p-2 variant-ghost-surface relative overflow-auto">
	<p>{person.firstName}, {person.lastName}</p>
	<p>{person.email}</p>
	{#if person.location}
		<p class="!text-sm">Location: {person.location.name}</p>
	{/if}
	<div class="absolute top-2 right-2 action-buttons flex gap-2">
		<button class="text-error-400" on:click={() => $deletePersonMutation.mutate(person.id)}>
			<Trash />
		</button>
	</div>
</section>
