<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;
	export let label: string;
	export let external = false;

	$: target = external ? '_blank' : '';
	$: rel = external ? 'noopener noreferrer' : '';

	// $: active = $page.url
	$: active = href === $page.url.pathname;
</script>

<a
	{href}
	class="text-inherit hover:text-primary-300"
	{target}
	{rel}
	class:active
	data-sveltekit-preload-data>{label}</a
>

<style>
	.active {
		@apply opacity-100 text-primary-500;
	}
</style>
