export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const FILTER_TASK = "FILTER_TASK";
export const IS_DONE = "IS_DONE";
export const TOGGLE_TODO = "TOGGLE_TODO";

export function addTask(todo) {
    return {
        type:ADD_TASK,
        payload: todo,
    }
}

export function deleteTask(todoId) {
    return {
        type:DELETE_TASK,
        payload: todoId,
    }
}


export function updateTask(todo) {
    return {
        type:UPDATE_TASK,
        payload: todo,
    }
}

export function isDone(todo) {
    return {
        type:IS_DONE,
        payload: todo,
    }
}

export function filtertodo(filter) {
    return {
        type:FILTER_TASK,
      filter,
    }
}
export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
  });
