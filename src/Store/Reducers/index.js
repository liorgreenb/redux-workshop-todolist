import todoListReducer from "./TodoList/reducer";
import { combineReducers } from "redux";

export default combineReducers({
    todos: todoListReducer,
});