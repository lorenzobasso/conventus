<script lang="ts">
	import type { PersonAvailability } from '$api/api-response-types'

	import { clipboard } from '@skeletonlabs/skeleton'

	import { Copy } from 'svelte-radix'

	export let people: PersonAvailability[]
	let done = false

	$: names =
		people?.map(({ person }) => `${person.firstName} (${person.lastName})`)?.join(', ') ?? ''
	$: emails = people?.map(({ person }) => person.email)?.join(', ') ?? ''
</script>

<article
	class="card p-3 variant-ghost-secondary flex flex-col gap-2 relative {done
		? 'brightness-75'
		: 'card-hover'}"
>
	<div class="mr-4">{names}</div>
	<div class="flex flex-wrap text-sm font-light">{emails}</div>
	<div class="absolute top-4 right-2">
		<button on:click={() => (done = true)} use:clipboard={emails}><Copy /></button>
	</div>
</article>
