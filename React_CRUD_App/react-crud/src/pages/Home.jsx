import React from 'react'
import { useState, useContext,useEffect } from "react"
import { TaskList } from "../component/TaskList";
import Api from "../Api";
import { AppContext } from '../App';
import {collection, getDocs} from "firebase/firestore"
import { db } from '../config/firebase';
import { PostComponent } from './postComponent';

export const Home = () => {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setTask] = useState("");
    const {userName} = useContext(AppContext)
    const [postsList, setPostsList] = useState(null)
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
        if (task.id === id) {
          return { ...task, completed: true };
        }
        else {
          return task;
        }
      }))
    }

    const postRef = collection(db,"users-data")

    const getPosts = async () => {

        const data = await getDocs(postRef);
        setPostsList(data.docs.map((doc)=>({
          ...doc.data(), id: doc.id
        })))
    }

    useEffect(() => {
      getPosts()
    },)

  
  return (
    <>
    <div>
      <h4 className='m-auto font-bold text-3xl text-center p-4 text-deep-purple-600'>{userName} welcomes you to the page!!</h4>
    </div>
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
    {todoList.map((task,index) => {
      return (
        <TaskList key={index} taskName={task.taskName} id={task.id} completed={task.completed} deleteTask={deleteTask} updateTask={updateTask} />)
    })}
  </div>
  <Api/>
  <div className='flex flex-wrap'>
    {postsList?.map((post,id) => (
        <PostComponent key={id} post={post}/>
    ))}
  </div>
  </>
  )
}

