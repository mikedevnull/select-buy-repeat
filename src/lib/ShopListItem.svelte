<script lang="ts">
  import type { ShopListEntity } from "./ShopListEntity";

  export let item: ShopListEntity;

  function handleClick(i: ShopListEntity) {
    item = { ...i, checked: !i.checked };
  }
</script>

<div
  class="flex py-4 px-2 cursor-pointer  hover:bg-base-200"
  on:click={() => handleClick(item)}
>
  {#if item.checked == true}
    <input type="checkbox" checked class="checkbox" />
  {:else}
    <input type="checkbox" class="checkbox" />
  {/if}
  <span class="flex-grow px-2">{item.name}</span>
</div>

<style>
</style>
