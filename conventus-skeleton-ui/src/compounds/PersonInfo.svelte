<script lang="ts">
	import type { Person } from '$api/api-response-types'

	import { Trash } from 'svelte-radix'

	export let person: Person
</script>

<section class="card p-2 variant-ghost-surface relative">
	<p>{person.firstName}, {person.lastName}</p>
	<p>{person.email}</p>
	{#if person.location}
		<p class="!text-sm">Location: {person.location.name}</p>
	{/if}
	<div class="absolute top-2 right-2 action-buttons flex gap-2">
		<button class="text-error-400">
			<Trash />
		</button>
	</div>
</section>
