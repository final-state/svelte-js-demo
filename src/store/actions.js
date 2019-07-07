import uuidv1 from "uuid/v1";

export default {
  addTask(draftState, title) {
    draftState.list.push({
      id: uuidv1(),
      title,
      status: false
    });
  },
  removeTask(draftState, id) {
    const index = draftState.list.findIndex(task => task.id === id);
    if (index >= 0) {
      draftState.list.splice(index, 1);
    }
  },
  setTaskStatus(draftState, { id, status }) {
    const task = draftState.list.find(task => task.id === id);
    if (task !== undefined) {
      task.status = status;
    }
  },
  setTaskTitle(draftState, { id, title }) {
    const task = draftState.list.find(task => task.id === id);
    if (task !== undefined) {
      task.title = title;
    }
  }
};
