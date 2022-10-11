<script lang="ts">
  import type { ShopListEntity } from "./ShopListEntity";
  import ShopListItem from "./ShopListItem.svelte";
  export let items: ArrayLike<ShopListEntity>;
</script>

<div class="shoplist">
  {#each items as item}<ShopListItem bind:item />{/each}
</div>

<style>
  .shoplist {
    display: flex;
    flex-direction: column;
  }
  .newItem {
    border: 1px solid var(--color-border);
    border-radius: 4px;
    background-color: white;
    margin: 0.4em;
    padding: 0.4em;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    max-width: 640px;
    margin: auto;
    margin-bottom: 1em;
  }

  .newItem:focus {
    top: 0;
    bottom: auto;
  }

  .newItem input[type="text"] {
    width: 100%;
    box-sizing: border-box;
    outline: none;
    border: none;
    padding: 4px;
  }
</style>
