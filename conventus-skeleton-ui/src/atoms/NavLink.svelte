<script lang="ts">
  import { page } from "$app/stores";

  export let href: string;

  $: active = $page.url.pathname === href;
</script>

<a {href} class="brightness-75 hover:brightness-100" class:active><slot /></a>

<style>
  .active {
    @apply brightness-110;
  }
</style>
