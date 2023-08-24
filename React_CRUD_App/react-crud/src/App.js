import { useState } from "react"
import {
  List,
  ListItem,
  ListItemSuffix,
  IconButton,
} from "@material-tailwind/react";
import { Icon } from "./icons"

function App() {

  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value)
  }

  const addtask = () => {
    const newTodoList = [...todoList, task]
    setTodoList(newTodoList);
    console.log({ newTodoList })
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
      <div className="bg-blue-gray-200 m-auto w-[30rem]">
      {todoList.map((task) => {
       return (<List className="m-auto w-96" >
          <ListItem ripple={false} className="py-1 pr-1 pl-4">
            {task}
            <ListItemSuffix>
              <IconButton variant="text" color="purple-gray">
                <Icon />
              </IconButton>
            </ListItemSuffix>
          </ListItem>
        </List>
      )})}
      </div>
    </div>
  );
}

export default App;  
