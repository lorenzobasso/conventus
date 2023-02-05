<script lang="ts">
	import type { Location, NewPerson } from '$api/api-response-types'
	import FormField from '$atoms/FormField.svelte'

	export let newPerson: NewPerson
	export let locations: Location[]
</script>

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
	<FormField label="Location">
		<select name="locations" bind:value={newPerson.locationId}>
			{#each locations as location}
				<option value={location.id}>{location.name} - ({location.timezone})</option>
			{/each}
		</select>
	</FormField>
</form>
