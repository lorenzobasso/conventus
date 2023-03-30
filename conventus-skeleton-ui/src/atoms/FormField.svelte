<script lang="ts">
	export let label: string
</script>

<label class="space-y-1">
	<span class="text-xs brightness-90">{label}</span>
	<slot />
</label>
