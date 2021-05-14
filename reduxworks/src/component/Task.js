import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../redux/actions';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { todos } from '../redux/state';

function Task({ todo }) {
    const [editable, setEditable] = useState(false)
    const [description, setDescription] = useState(todo.description)
    let dispatch = useDispatch();

    return (
        <div>
            <div className="row mx-2 align-items-center">
                <div>{todo.id.length > 1 ? todo.id[2] : todo.id}</div>
                <div className="col">
                    {editable ?
                        <input type="text" className="form-control"
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}

                        />
                        :
                        <h4>{todo.description}</h4>}
                </div>
                <button className="btn btn-success"
                    onClick={() => {
                        dispatch(updateTask({
                            ...todo,
                            description: description
                        }))
                        if(editable) {
                            setDescription(todo.description);   
                        }
                        setEditable(!editable);
                      

                    }}
                >{editable?"Update":"Edit"}</button>
                <button className="btn btn-danger m-2"
                    onClick={() => dispatch(deleteTask(todo.id))}
                >Delete</button>
                <BootstrapSwitchButton
     checked={false}
    onlabel='Done'
    offlabel='Not Done'
    offstyle="warning"
    onstyle="info" 
    value={todos.isDone}
    
/>
            </div>
        </div>
    )
}

export default Task
