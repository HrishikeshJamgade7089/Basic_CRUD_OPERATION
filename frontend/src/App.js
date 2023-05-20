import React, { useEffect, useState } from 'react'
import List from './components/List';
import axios from 'axios';
import { baseURL } from './utils/constant';
 
const App = () => {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const [updateID, setUpdateID] = useState(null);
  useEffect(()=>{
    axios.get(`${baseURL}/get`).then((res)=>{
      setTasks(res.data);
    })
  },[updateUI]);

  const addTask = ()=>{
    axios.post(`${baseURL}/save`, {task:input}).then(res=>{
      
      setInput("");
      setUpdateUI((prevState)=>{return !prevState});
    })
  }

  const updateMode=(id, text)=>{
      setInput(text);
      setUpdateID(id);
  };

  const updateTask = ()=>{
    axios.put(`${baseURL}/update/${updateID}`,{task: input}).then((res)=>{
      
      setUpdateUI((prevState)=>!prevState);
      setUpdateID(null);
      setInput("");
    });
  };

 

  return (
    <>
      <main>
        <h1 className='title'>CRUD Operation</h1>
        <div className="input_holder">
          <input className='input_field' type="text" value={input} onChange={(e)=> setInput(e.target.value)} />
    
          <button type='submit' onClick={updateID ? updateTask:addTask}>{updateID?"update Task":"Add Task"}</button>
        </div>

        <ul className='task-list'>
          {tasks.map(task => (
            <List key={task._id} id={task._id} task={task.task} setUpdateUI={setUpdateUI} updateMode={updateMode}/>
          ))}
        </ul>



      </main>
    </>
  )
}

export default App