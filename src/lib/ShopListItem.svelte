<script lang="ts">
  import type { ShopListEntity } from "./ShopListEntity";

  export let item: ShopListEntity;

  function handleClick(i: ShopListEntity) {
    item = { ...i, checked: !i.checked };
  }
</script>

<li class="flex">
  <label
    for="list-checkbox-{item.id}"
    class="flex-grow p-4 cursor-pointer  hover:bg-base-200"
  >
    <input
      type="checkbox"
      id="list-checkbox-{item.id}"
      class="px-2 checkbox align-middle"
      checked={item.checked}
    />
    <span class="text pl-2 align-middle">{item.name}</span>
  </label>
</li>

<style>
</style>
