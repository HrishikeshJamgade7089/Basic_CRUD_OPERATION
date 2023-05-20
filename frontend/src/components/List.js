import React, { useEffect } from 'react'
import {BsTrash} from "react-icons/bs";
import {BiEditAlt} from "react-icons/bi";
import axios from 'axios';
import { baseURL } from '../utils/constant';

const List = ({id, task, setUpdateUI, updateMode}) => {
  
  const removeTask =()=> {
    axios.delete(`${baseURL}/delete/${id}`).then(res=>{
      setUpdateUI((prevState)=>{
        return !prevState;
      })
    })
  }
  return (
    <li className='task-item'>
      <span className='task-text'>{task}</span>
      <div className='icon-section'>
        <BiEditAlt className='icon' onClick={()=>{updateMode(id, task)}}/>
        <BsTrash className='icon' onClick={removeTask} />
      </div>
    </li>
  )
}

export default List