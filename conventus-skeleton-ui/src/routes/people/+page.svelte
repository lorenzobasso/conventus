<script lang="ts">
	import type { Person } from '$api/api-response-types'
	import { useGetPeople } from '$api/queries/use-get-people'
	import NewPersonModal from '$compounds/NewPersonModal.svelte'
	import PersonInfo from '$compounds/PersonInfo.svelte'

	import { type ModalSettings, modalStore } from '@skeletonlabs/skeleton'

	import { Plus } from 'svelte-radix'

	const query = useGetPeople()

	let filter = ''
	$: stringMatches = (name: string) => name.toLocaleLowerCase().includes(filter)
	$: personMatchesSearch = (person: Person) =>
		[person.firstName, person.lastName, person.email].some(stringMatches)
	$: people = $query.data?.filter(personMatchesSearch) ?? []

	const createNewPerson = () =>
		modalStore.trigger({
			type: 'component',
			title: 'Create a new person',
			component: {
				ref: NewPersonModal,
				props: {},
			},
			response: (data: unknown) => console.log(data),
		} as ModalSettings)
</script>

{#if $query.isSuccess}
	<div class="flex flex-col justify-center items-center gap-4">
		<input type="search" bind:value={filter} placeholder="Filter people" class="h-8" />
		<article class="grid gap-2 grid-cols-3 w-full">
			{#each people as person}
				<PersonInfo {person} />
			{/each}
		</article>
		<button class="btn variant-ghost-primary btn-sm flex gap-1" on:click={createNewPerson}>
			<Plus />
			add new
		</button>
	</div>
{/if}
