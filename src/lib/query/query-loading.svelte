<script lang="ts">
	import { raise } from '$lib/type-helpers';

	import NoDataError, { noDataMessage } from './no-data-error.svelte';

	import type { CreateQueryResult } from '@tanstack/svelte-query';
	import Loading from './loading.svelte';
	import Error from './error.svelte';

	type T = $$Generic;

	export let query: CreateQueryResult<T, any>;
</script>

{#if $query.isLoading}
	<Loading />
{:else if $query.isError}
	<Error>
		Error fetching data: {$query.error.message}
	</Error>
{:else if $query.data}
	<slot
		data={$query.data ?? raise(noDataMessage)}
		refetch={$query.refetch}
		status={$query.status}
	/>
{:else}
	<NoDataError />
{/if}
