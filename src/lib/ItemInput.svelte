<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  let input: HTMLInputElement;
  const onKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      addItem();
    }
  };
  const addItem = () => {
    dispatch("add", {
      value: input.value,
    });
    input.value = "";
  };

  const onChange = (e: any) => {
    dispatch("change", {
      value: input.value,
    });
  };
</script>

<div class="form-control">
  <div class="input-group">
    <input
      bind:this={input}
      type="text"
      placeholder="Add or find item …"
      class="input input-bordered input-md w-full"
      on:keypress={onKeyPress}
      on:input={onChange}
    />
    <button class="btn btn-square" on:click={addItem}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
  </div>
</div>

<style>
</style>
