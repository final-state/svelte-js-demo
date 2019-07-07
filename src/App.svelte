<script>
  import TaskList from "./TaskList.svelte";
  import store from "./store";
  let list = store.getState().list;
  store.subscribe(() => (list = store.getState().list));
  function addTask() {
    store.dispatch("addTask", "New Task");
  }
</script>

<style>
  h1 {
    color: blue;
  }
  p {
    color: gray;
  }
  button {
    cursor: pointer;
  }
  .root {
    text-align: center;
  }
</style>

<div class="root">
  <h1>Todo-List</h1>
  <p>
    Powered by
    <a href="https://svelte.dev" target="_blank">SVELET</a>
  </p>
  <p>
    State Management:
    <a href="https://github.com/final-state" target="_blank">final-state</a>
  </p>
  <button on:click={addTask}>Add Task</button>
  <TaskList {list} />
</div>
