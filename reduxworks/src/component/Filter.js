import React from 'react'
import { DropdownButton,Dropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { filtertodo } from '../redux/actions';

const Filter = () => {
    
    let dispatch = useDispatch();
    return (
        <div>
            
<DropdownButton id="dropdown-item-button" title="Search">
  <Dropdown.Item as="button" onClick={(e)=>dispatch(filtertodo('SHOW_ALL'))}>All</Dropdown.Item>
  <Dropdown.Item as="button"onClick={(e)=>dispatch(filtertodo('DONE'))}>DONE</Dropdown.Item>
  <Dropdown.Item as="button"onClick={(e)=>dispatch(filtertodo('NOT_DONE'))}>NOT DONE</Dropdown.Item>
</DropdownButton>
        </div>
    )
}

export default Filter
