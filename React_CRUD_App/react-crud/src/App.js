import { useEffect, useState } from "react"
import { TaskList } from "./component/TaskList";


function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setTask] = useState("");

  useEffect(()=>{
    console.log("Component Mounted");

    return ()=>{
      console.log("Component Unmounted")
    }
  },[])

  const handleChange = (event) => {
    setTask(event.target.value)
  }

  const addtask = () => {
    // const newTodoList = [...todoList, task]
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    }
    setTodoList([...todoList, task]);
    console.log(todoList)
  }


  const deleteTask = (id) => {
    // filtering the old todo list with the selected task name and returning the new list
    setTodoList(todoList.filter((task) => {
      return task.id !== id
    }))
  }

  const updateTask = (id) => {
    // update the old todo list with the selected task name and returning the new list
    setTodoList(todoList.map((task) => {
      if(task.id === id){
        console.log("updated");
        return {...task, completed:true};
      }
      else{
        console.log("Not updated");
       return task;
      }
    }))
  }


  return (
    <div className="App">
      <div className="mt-2">
        <input
          onChange={handleChange}
          className="flex m-auto w-80 mt-9 rounded-md border-0 py-1.5 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
        />
        <button
          onClick={addtask}
          className="flex m-auto w-64 my-6 justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-voilet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-purple-500"
        >
          Add Task
        </button>
      </div>
      <div className="bg-blue-gray-100  m-auto w-[30rem]">
        {todoList.map((task) => {
          return (
            <TaskList taskName={task.taskName} id={task.id} deleteTask={deleteTask} completed={task.completed} updateTask={updateTask} />)
        })}
      </div>
    </div>
  );
}

export default App;  
