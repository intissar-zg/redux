
const filtercase = (todos,filter) => {
   switch(filter){
       case 'SHOW_ALL':
       return todos;
       case 'DONE':
        return todos.filter(t=>t.isDone);
        case 'NOT_DONE':
            return todos.filter(t=>!t.isDone);
            default:
                return todos;
   }
}

export default filtercase
