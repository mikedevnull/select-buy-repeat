<script lang="ts">
  import type { ShopListEntity } from "./ShopListEntity";

  export let item: ShopListEntity;

  function handleClick(i: ShopListEntity) {
    item = { ...i, checked: !i.checked };
  }
</script>

<div class="shoplistitem" on:click={() => handleClick(item)}>
  <span>{item.name}</span>
</div>

<style>
  .shoplistitem {
    border-top: 1px solid var(--color-border);
    padding: 1em;
    cursor: pointer;
  }
  .shoplistitem:last-child {
    border-bottom: 1px solid var(--color-border);
  }
  .shoplistitem:first-child {
    border-top: 1px none;
  }

  .shoplistitem span {
    flex-grow: 1;
  }

  .shoplistitem :hover {
  }
</style>
