<script>
  import TaskList from "./TaskList.svelte";
  import store from "./store";
  let list = store.getState().list;
  store.subscribe(() => (list = store.getState().list));
</script>

<style>
  h1 {
    color: blue;
  }
  p {
    color: gray;
  }
  .root {
    text-align: center;
  }
</style>

<div class="root">
  <h1>Todo-List</h1>
  <p>Powered by SVELTE</p>
  <p>
    State management:
    <a href="https://github.com/final-state" target="_blank">final-state</a>
  </p>
  <TaskList {list} />
</div>
