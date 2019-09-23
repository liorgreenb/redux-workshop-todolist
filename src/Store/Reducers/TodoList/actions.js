export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const CLEAR_ALL_TODOS = 'CLEAR_ALL_TODOS';

export function addTodoItem(task) {
    return {
        type: ADD_TODO_ITEM,
        payload: {
            task,
        }
    }
}