import {FILTER_TASK} from './actions';




export let filter = (state, action) => {
  
    switch (action.type) {
       
            case FILTER_TASK:
              
                return action.filter;
                default: 
                return state;
       
    }
    
}