import React from 'react'
import { MdDelete } from "react-icons/md";
const TodoItems = ({name ,date }) => {
  return (
    <div className='d-flex gap-3 justify-content-between w-100 align-items-center fw-bold  bg-light text-dark rounded p-2 my-2'>
        <p className='pt-2 w-25'>{name}</p>

        <p className='pt-2 w-25'>{date}</p>

        <button className="btn-danger btn px-3"><MdDelete/></button>
      
    </div>
  )
}

export default TodoItems
