<script lang="ts">
	import type { AvailabilityPatch, Person } from '$api/api-response-types'
	import { useUpdateAvailability } from '$api/queries/use-availabilities'
	import { useDeletePerson } from '$api/queries/use-people'
	import CounterButton from '$atoms/CounterButton.svelte'
	import ToggleIconButton from '$atoms/ToggleIconButton.svelte'

	import { Loop, Plus, Reload, TrackNext, Trash } from 'svelte-radix'

	export let person: Person

	const deletePersonMutation = useDeletePerson()
	const updateAvailabilityMutation = useUpdateAvailability()

	const defaultAvailability: AvailabilityPatch = {
		personId: person.id,
		isRepeat: false,
		numTimesAvailable: 0,
		numTimesSkip: 0,
	}

	$: availability = {
		personId: person.id,
		isRepeat: person.availability?.isRepeat ?? defaultAvailability.isRepeat,
		numTimesAvailable:
			person.availability?.numTimesAvailable ?? defaultAvailability.numTimesAvailable,
		numTimesSkip: person.availability?.numTimesSkip ?? defaultAvailability.numTimesSkip,
	}

	$: update = (patch: Partial<AvailabilityPatch>) => () => {
		const { isRepeat, numTimesAvailable, numTimesSkip, personId } = {
			...availability,
			...patch,
		}

		$updateAvailabilityMutation.mutate({
			personId,
			isRepeat,
			numTimesAvailable: isRepeat ? 0 : numTimesAvailable,
			numTimesSkip: isRepeat ? numTimesSkip : 0,
		})
	}
</script>

<section class="card p-2 variant-ghost-surface relative overflow-auto">
	<p>{person.firstName}, {person.lastName}</p>
	<p>{person.email}</p>
	{#if person.location}
		<p class="!text-sm">Location: {person.location.name}</p>
	{/if}
	<div class="absolute top-2 right-2 action-buttons flex gap-2 items-center">
		{#if availability.isRepeat}
			<CounterButton
				count={availability.numTimesSkip}
				on:click={update({ numTimesSkip: availability.numTimesSkip + 1 })}
			>
				<TrackNext />
			</CounterButton>
		{:else}
			<CounterButton
				count={availability.numTimesAvailable}
				on:click={update({
					numTimesAvailable: availability.numTimesAvailable + 1,
				})}
			>
				<Plus />
			</CounterButton>
		{/if}

		<ToggleIconButton
			active={availability.isRepeat}
			on:click={update({ isRepeat: !availability.isRepeat })}
		>
			<Loop />
		</ToggleIconButton>
		<button on:click={update(defaultAvailability)}>
			<Reload />
		</button>
		<button class="text-error-400" on:click={() => $deletePersonMutation.mutate(person.id)}>
			<Trash />
		</button>
	</div>
</section>
