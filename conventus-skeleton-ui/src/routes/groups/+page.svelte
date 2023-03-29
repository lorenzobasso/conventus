<script lang="ts">
  import type { PersonAvailability } from "$api/api-response-types";
  import { useGetAvailabilities } from "$api/queries/use-availabilities";
  import { useGetMessage } from "$api/queries/use-message";
  import GroupsPicker from "$compounds/GroupsPicker.svelte";
  import MessagePreparator from "$molecules/MessagePreparator.svelte";

  const getAvailable = useGetAvailabilities();
  const message = useGetMessage();

  const shouldExclude = (person: PersonAvailability) => person.numTimesSkip > 0;
  const shouldInclude = (person: PersonAvailability) => !shouldExclude(person);

  let groupSize = 5;
  let frozen = false;
  let groups: PersonAvailability[][] = [];

  $: toInclude =
    $getAvailable.data
      ?.filter(shouldInclude)
      ?.sort(() => Math.random() - 0.5) ?? [];
  $: toExclude = $getAvailable.data?.filter(shouldExclude) ?? [];

  const shuffleGroups = () =>
    (toInclude = toInclude.sort(() => Math.random() - 0.5));
</script>

<div class="flex flex-col gap-4 items-center">
  <h2>Choose the groups</h2>
  <p>
    There are {toInclude.length} people, another {toExclude.length} will not participate
  </p>
  {#if !frozen}
    <section class="flex flex-col gap-2 items-center justify-center w-full">
      <div class="grid grid-cols-[auto_1fr_auto] gap-2 w-1/2 items-center">
        <div class="">Target size: {groupSize}</div>
        <input
          type="range"
          min="2"
          max="10"
          step="1"
          bind:value={groupSize}
          disabled={frozen}
        />
        <button
          on:click={shuffleGroups}
          disabled={frozen}
          class="btn btn-sm variant-ghost-primary">Shuffle</button
        >
      </div>
    </section>
    <GroupsPicker
      {groupSize}
      {toInclude}
      bind:groups
      on:click={() => (frozen = true)}
    />
  {:else}
    <MessagePreparator
      {groups}
      title={$message.data?.title}
      description={$message.data?.description}
    />
  {/if}
</div>
