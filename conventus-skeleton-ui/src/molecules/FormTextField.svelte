<script lang="ts">
	import FormField from '$atoms/FormField.svelte'

	export let value: string
	export let label: string
	export let placeholder = ''
</script>

<FormField {label}>
	<input type="text" {placeholder} bind:value />
</FormField>
