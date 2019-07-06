<script>
  import store from "./store";
  export let id;
  export let title;
  export let status;
  function changeStatus(e) {
    store.dispatch("setTaskStatus", {
      id,
      status: e.target.checked
    });
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
    width: 30%;
    display: flex;
    justify-content: flex-end;
    padding-right: 5px;
    cursor: pointer;
  }
  .input-container > input {
    cursor: pointer;
  }
</style>

<div class="root">
  <label for={id} class="input-container">
    <input {id} type="checkbox" checked={status} on:change={changeStatus} />
  </label>
  <label class={`label-${status ? 'done' : 'pending'}`}> {title} </label>
</div>
