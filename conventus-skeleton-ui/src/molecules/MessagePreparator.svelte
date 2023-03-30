<script lang="ts">
	import { clipboard } from '@skeletonlabs/skeleton'

	import { Copy } from 'svelte-radix'

	import type { PersonAvailability } from '$api/api-response-types'

	import PeopleGroupToggle from './PeopleGroupToggle.svelte'

	export let groups: PersonAvailability[][]
	export let title: string = 'some title'
	export let description: string = 'desc'
</script>

<div>
	<section class="space-y-2 mb-4 w-10/12 mx-auto">
		<div class="card variant-ringed-surface flex justify-between p-2 items-start">
			<h5 class="flex-1">{title}</h5>
			<button use:clipboard={title} class="pt-2"><Copy /></button>
		</div>
		<div class="card variant-ringed-surface flex justify-between p-2 items-start">
			<div class="flex-1 whitespace-pre">{description}</div>
			<button use:clipboard={description} class="pt-2"><Copy /></button>
		</div>
	</section>
	<div class="grid grid-cols-2 gap-4 w-full">
		{#each groups as group}
			<PeopleGroupToggle people={group} />
		{/each}
	</div>
</div>
