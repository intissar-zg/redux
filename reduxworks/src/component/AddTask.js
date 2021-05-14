import React, { useState } from 'react';
import { addTask } from '../redux/actions';
import {v1 as uuid} from 'uuid';
import { useDispatch } from 'react-redux';


function AddTask() {
    let [description, setDescription] = useState();
    let dispatch = useDispatch();
    return (
        <div>
            <div className="row m-2">
                <input
                
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                type="text" className="col form-control"/>
                <button
                
                onClick={()=>{
                       dispatch(addTask({
                        id: uuid(),
                        description: description
                    }));
                    setDescription('');
                    }}
                className="btn btn-primary mx-2">Add</button>

            </div>
        </div>
    )
}

export default AddTask
