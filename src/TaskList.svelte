<script>
  import TaskItem from "./TaskItem.svelte";
  export let list = [];
</script>

<style>
  .root {
    display: flex;
    justify-content: center;
  }
  .list {
    width: 300px;
  }
</style>

<div class="root">
  <div class="list">
    {#each list as { id, title, status }, i}
      <TaskItem {id} {title} {status} />
    {/each}
  </div>
</div>
