<script lang="ts">
  import type { NewPerson } from "$api/api-response-types";
  import { useGetLocations } from "$api/queries/use-locations";
  import NewPersonForm from "./NewPersonForm.svelte";
  import { ProgressRadial, modalStore } from "@skeletonlabs/skeleton";

  export let parent: any;

  const locations = useGetLocations();

  let newPerson: NewPerson = {
    firstName: "",
    lastName: "",
    email: "",
    locationId: 1,
  };

  const handleSubmit = () => {
    $modalStore[0].response && $modalStore[0].response(newPerson);
    modalStore.close();
  };
</script>

<div class="flex flex-col gap-8">
  {#if $locations.isLoading}
    <div class="w-32 self-center">
      <ProgressRadial />
    </div>
  {:else}
    <NewPersonForm bind:newPerson locations={$locations.data || []} />
  {/if}
  <footer class="modal-footer {parent.regionFooter}">
    <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}
      >{parent.buttonTextCancel}</button
    >
    <button
      class="btn {parent.buttonPositive}"
      on:click={handleSubmit}
      disabled={!$locations.isSuccess}>Submit Form</button
    >
  </footer>
</div>
