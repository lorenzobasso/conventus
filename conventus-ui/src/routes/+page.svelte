<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query'

	import { API } from '../api/api'
	import type { Person } from '../api/api-response-types'

	const query = createQuery<Person[], Error>({ queryKey: ['people'], queryFn: API.people.getAll })
</script>

<div>
	{JSON.stringify($query.status)}
	{#if $query.isLoading}
		<p>Loading...</p>
	{:else if $query.isError}
		<p>Error: {$query.error.message}</p>
	{:else if $query.isSuccess}
		<p>{JSON.stringify($query.data)}</p>
	{/if}
</div>
