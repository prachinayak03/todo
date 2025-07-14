import React from 'react'
import { useState } from 'react';
const Additems = ({AddHandler}) => {
const [name ,setName ]=useState();
const [date , setDate]= useState();

const Addbtnhandler = ()=>{
  AddHandler(name , date)
  setDate('')
  setName("")
}
  return (
    <div className='d-flex gap-3 container-fluid  p-3  '>
        <input type="text" 
        onChange={el => setName(el.target.value)} 
        placeholder="Addlist....."
        className="form-control p-2 rounded"
        value={name} />
        <input type="date" 
        onChange={el => setDate(el.target.value)} 
        className="form-control p-2 rounded" 
        value={date}
        />
        <button onClick={Addbtnhandler}className="btn-primary btn px-3">+</button>


        </div>
  )
}

export default Additems
