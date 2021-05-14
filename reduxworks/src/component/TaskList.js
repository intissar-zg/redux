import React from 'react'
import Task from './Task'
import { useSelector } from 'react-redux'
import filtercase from '../redux/filtercase';

function TaskList({toggleTodo}) {
    let todos = useSelector(state=>state);
    const filter = useSelector(state=>state.filter); 
    const todolist=filtercase(todos,filter)
    

   

    return (
        <div className="my-4">
            <div>
            
            </div>
            {todolist.map((todo)=>   {
                return <Task key={todos.id} todo={todo} onClick={() => toggleTodo(todo.id)}/>;
            })}
        </div>
        
    )
}

export default TaskList
