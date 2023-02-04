<script lang="ts">
	export let title: string
</script>

<div class="relative inline-block tooltip-container">
	<div class="tooltip-text absolute text-sm z-50 bg-zinc-900 p-2 w-32">{title}</div>
	<slot />
</div>

<style>
	.tooltip-text {
		visibility: visible;
	}

	.tooltip-container:hover > .tooltip-text {
		visibility: visible;
		top: 100%;
	}
</style>
