import './App.css';
import AddTask from './component/AddTask';
import TaskList from './component/TaskList';
import 'bootstrap/dist/css/bootstrap.css';
import Filter from './component/Filter';

function App() {
  return (
    <div className="App m-5">
          <h1>My TodoList </h1>
      <AddTask/>
      <Filter></Filter>
      <TaskList/>

    </div>
  );
}

export default App;
