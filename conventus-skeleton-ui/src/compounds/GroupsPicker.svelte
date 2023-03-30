<script lang="ts">
	import * as R from 'ramda'

	import type { PersonAvailability } from '$api/api-response-types'

	export let groupSize: number
	export let toInclude: PersonAvailability[]
	export let groups: PersonAvailability[][]

	$: numSmallerGroups = groupSize - (toInclude.length % groupSize)
	$: numLargerGroups = Math.floor(
		(toInclude.length - numSmallerGroups * (groupSize - 1)) / groupSize,
	)

	$: groups = R.concat(
		R.splitEvery(groupSize, toInclude.slice(0, numLargerGroups * groupSize)),
		R.splitEvery(groupSize - 1, toInclude.slice(numLargerGroups * groupSize, toInclude.length)),
	)
</script>

{#if numLargerGroups < 0 || numSmallerGroups < 0 || R.sum(groups.map(R.length)) !== toInclude.length}
	<div class="alert variant-ghost-error">Cannot generate groups of this size</div>
{:else}
	<article class="grid grid-cols-3 gap-4 w-full">
		{#each groups as group}
			<section class="card variant-ghost-surface p-2 card-hover">
				{#each group as person (person.person.email)}
					<p>{person.person.firstName}, {person.person.lastName}</p>
				{/each}
			</section>
		{/each}
	</article>
	<button class="btn variant-ghost-primary btn-md" on:click>Generate</button>
{/if}
