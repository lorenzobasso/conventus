<script context="module">
	export const noDataMessage = 'Query returned no data';
</script>

<script lang="ts">
	import Error from './error.svelte';
</script>

<Error>{noDataMessage}</Error>
