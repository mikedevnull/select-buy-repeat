<script lang="ts">
  import ShopList from "./lib/ShopList.svelte";
  import type { ShopListEntity } from "./lib/ShopListEntity";

  let items: Array<ShopListEntity> = [
    { id: 1, name: "Foo", checked: false },
    { id: 2, name: "Bar", checked: true },
    { id: 3, name: "Baz", checked: false },
  ];
</script>

<main class="md:max-w-screen-md container mx-auto p-2">
  <ShopList bind:items />
</main>
