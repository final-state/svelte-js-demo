import uuidv1 from "uuid/v1";

export default {
  addTask(draftState, title) {
    draftState.list.push({
      id: uuidv1(),
      title,
      status: false
    });
  },
  setTaskStatus(draftState, { id, status }) {
    const task = draftState.list.find(task => task.id === id);
    if (task !== undefined) {
      task.status = status;
    }
  }
};
