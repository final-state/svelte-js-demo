import { get } from "svelte/store";
import uuidv1 from "uuid/v1";
import listStore from ".";

export function addTask(title) {
  listStore.update(list => {
    list.push({
      id: uuidv1(),
      title,
      status: false
    });
    return list;
  });
}

export function removeTask(id) {
  const list = get(listStore);
  const index = list.findIndex(task => task.id === id);
  if (index >= 0) {
    listStore.update(prev => {
      prev.splice(index, 1);
      return prev;
    });
  }
}

export function setTaskStatus(id, status) {
  const list = get(listStore);
  const index = list.findIndex(
    task => task.id === id && task.status !== status
  );
  if (index >= 0) {
    const task = list[index];
    listStore.update(prev => {
      prev.splice(index, 1, {
        ...task,
        status
      });
      return prev;
    });
  }
}

export function setTaskTitle(id, title) {
  const list = get(listStore);
  const index = list.findIndex(task => task.id === id && task.title !== title);
  if (index >= 0) {
    const task = list[index];
    listStore.update(prev => {
      prev.splice(index, 1, {
        ...task,
        title
      });
      return prev;
    });
  }
}
