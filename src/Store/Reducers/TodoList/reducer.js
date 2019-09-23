import { ADD_TODO_ITEM } from "./actions";

export default function todoListReducer(state = [], action) {
  let newState = state;
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO_ITEM:
      newState = state.concat(payload.task);
      break;
  }

  return newState;
}
