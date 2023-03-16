import './App.css';
import ListToDo from "./components/ListToDo";
import Header from "./components/Header";
import {nanoid} from "nanoid";
import {useState} from "react";
import CreateTask from "./components/CreateTask";


function App() {
    const taskList = [
        {
            id: nanoid(),
            name: "Learn React",
            done: false
        },
        {
            id: nanoid(),
            name: "Learn css",
            done: true
        },
        {
            id: nanoid(),
            name: "Learn TypeScript",
            done: false
        }]
    const [list, setList] = useState(taskList)
    const changeStatus = (id) => {
        const updatedTask = list.map(el => el.id === id ? {...el, done: !el.done} : el)
        setList(updatedTask)
    }
    const deleteTask = (id) => {
        setList(list.filter(el => el.id !== id))
    }
    const createTask = (newTask) => {
        setList([...list, newTask])
    }
    const updateTask = (id, newName) => {
        const updatedList=list.map(el=>el.id===id?{...el,name:newName}:el)
        setList(updatedList)
    }
    return (

            <div className='frame'>
            <div className='container'>
            <Header/>
            <CreateTask createTask={createTask}/>
            <ListToDo list={list}
                      changeStatus={changeStatus}
                      deleteTask={deleteTask}
                      createTask={createTask}
                      updateTask={updateTask}
            />
            </div>
            </div>
    )
}

export default App;
