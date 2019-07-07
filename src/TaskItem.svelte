<script>
  import { tick } from "svelte";
  import keycode from "keycode";
  import store from "./store";
  export let id;
  export let title;
  export let status;
  let inputEl;
  let editing = false;
  function changeStatus(e) {
    store.dispatch("setTaskStatus", {
      id,
      status: e.target.checked
    });
  }
  function changeTitle(e) {
    store.dispatch("setTaskTitle", {
      id,
      title: e.target.value
    });
  }
  function remove() {
    store.dispatch("removeTask", id);
  }
  async function edit() {
    editing = true;
    await tick();
    inputEl.focus();
  }
  function quitEditing() {
    editing = false;
  }
  function handleKeyup(e) {
    if (keycode.isEventKey(event, "enter")) {
      quitEditing();
    }
  }
</script>

<style>
  .root {
    display: flex;
    align-items: center;
  }
  label {
    user-select: none;
  }
  .label-done {
    color: gray;
    text-decoration: line-through black;
  }
  .label-pending {
    color: black;
  }
  .input-container {
    width: 25%;
    display: flex;
    justify-content: flex-end;
    padding-right: 5px;
    cursor: pointer;
  }
  .input-container > input {
    cursor: pointer;
  }
  .title-container {
    width: 50%;
    text-align: left;
    cursor: pointer;
  }
  .title-container > label {
    cursor: pointer;
  }
  .title-container:hover {
    background: yellow;
  }
  .title-input {
    width: 100%;
  }
  .remove {
    cursor: pointer;
    padding-left: 5px;
  }
  .remove:hover {
    color: red;
  }
</style>

<div class="root">
  <label for={id} class="input-container">
    <input {id} type="checkbox" checked={status} on:change={changeStatus} />
  </label>
  <div class="title-container" on:click={edit}>
    {#if editing}
      <input
        class="title-input"
        bind:this={inputEl}
        on:change={changeTitle}
        on:blur={quitEditing}
        on:keyup={handleKeyup}
        value={title} />
    {:else}
      <label class={`label-${status ? 'done' : 'pending'}`}> {title} </label>
    {/if}
  </div>
  <label class="remove" on:click={remove}>X</label>
</div>
