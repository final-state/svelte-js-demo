<script>
  import TaskList from "./TaskList.svelte";
  import list from "./store";
  import { addTask } from "./store/actions";
  function add() {
    addTask("New Task");
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
  <button on:click={add}>Add Task</button>
  <TaskList list={$list} />
</div>
