<script lang="ts">
	export let active: boolean
</script>

<button class="p-[5px] rounded-md {active && 'bg-primary-500/50'}" on:click>
	<slot />
</button>
