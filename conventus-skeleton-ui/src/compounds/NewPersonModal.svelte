<script lang="ts">
	import type { NewPerson } from '$api/api-response-types'
	import FormField from '$atoms/FormField.svelte'

	import { modalStore } from '@skeletonlabs/skeleton'

	export let parent: any

	let newPerson: NewPerson = {
		firstName: '',
		lastName: '',
		email: '',
		locationId: 1,
	}

	const handleSubmit = () => {
		if ($modalStore[0].response) {
			$modalStore[0].response(newPerson)
		}
		modalStore.close()
	}
</script>

<div class="space-y-8">
	<form class="flex flex-col gap-2">
		<div class="flex gap-4">
			<FormField label="First name">
				<input type="text" bind:value={newPerson.firstName} />
			</FormField>
			<FormField label="Last name">
				<input type="text" bind:value={newPerson.lastName} />
			</FormField>
		</div>
		<FormField label="Email">
			<input type="text" bind:value={newPerson.email} />
		</FormField>
	</form>
	<footer class="modal-footer {parent.regionFooter}">
		<button class="btn {parent.buttonNeutral}" on:click={parent.onClose}
			>{parent.buttonTextCancel}</button
		>
		<button class="btn {parent.buttonPositive}" on:click={handleSubmit}>Submit Form</button>
	</footer>
</div>
