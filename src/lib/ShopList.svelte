<script lang="ts">
  import type { ShopListEntity } from "./ShopListEntity";
  import ShopListItem from "./ShopListItem.svelte";
  import ItemInput from "./ItemInput.svelte";
  export let items: Array<ShopListEntity>;
  let shownItems = items;

  const filter = (e: CustomEvent) => {
    const filtervalue = e.detail.value.toLowerCase();
    shownItems = items.filter((i) => {
      return i.name.toLowerCase().startsWith(filtervalue);
    });
  };
  const add = (e: CustomEvent) => {
    const newItem = { id: 0, name: e.detail.value, checked: false };
    items = [newItem, ...items];
    shownItems = items;
  };
</script>

<section class="flex flex-col">
  <div class="navbar rounded mb-4 text-primary-content bg-primary bg-base-100">
    <span class="text-xl">Shop list</span>
  </div>
  <ItemInput on:change={filter} on:add={add} />
  <div class="divide-y">
    {#each shownItems as item}<ShopListItem bind:item />{/each}
  </div>
</section>

<style>
</style>
