import { createStore } from "final-state";
import { applyLogger } from "final-state-logger";
import initialState from "./state";
import actions from "./actions";

const store = createStore(initialState, actions, "main-store");

applyLogger(store);

export default store;
