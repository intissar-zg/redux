import { ADD_TASK, UPDATE_TASK, DELETE_TASK,FILTER_TASK,IS_DONE } from './actions';
import { todos } from './state';


export let reducer = (state = todos, action) => {
    let newTodos;
    switch (action.type) {
        case ADD_TASK:
            newTodos = [...state];
            newTodos.push(action.payload);
            return newTodos;
        case DELETE_TASK:
            newTodos = [...state];
            newTodos = newTodos.filter(todo => todo.id != action.payload);
            return newTodos;
        case UPDATE_TASK:
            newTodos = [...state];
            let index = -1;
            for (let i = 0; i < newTodos.length; i++) {
                index++;
                if (newTodos[i].id == action.payload.id) {
                    break;
                }

            }
            if (index != -1) {
                newTodos[index] = action.payload;
                return newTodos;
            }
            case FILTER_TASK:
                newTodos = [...state];
                newTodos = newTodos.filter(todo => todo.id != action.payload);
                return newTodos;
           case 'TOGGLE_TODO':
                    return state.map(todo =>
                        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
                      );

    }
    return state;
}