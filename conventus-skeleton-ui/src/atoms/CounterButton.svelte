<script lang="ts">
	export let count: number
</script>

<div class="flex gap-1">
	<span class="text-xs">{count}</span>
	<button on:click><slot /></button>
</div>
