<script lang="ts">
  import ShopList from "./lib/ShopList.svelte";
  import ItemInput from "./lib/ItemInput.svelte";
  import type { ShopListEntity } from "./lib/ShopListEntity";

  let items: Array<ShopListEntity> = [
    { id: 1, name: "Foo", checked: false },
    { id: 2, name: "Bar", checked: true },
    { id: 3, name: "Baz", checked: false },
  ];
</script>

<ItemInput />
<ShopList bind:items />
