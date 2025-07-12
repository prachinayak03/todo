  import { useState } from 'react'

  import './App.css'
  import purple from './assets/purple flower.jpg'
 import Logo from './Components/Logo'

  import React from 'react'
  import Additems from './Components/Additems'
  import Addlist from './Components/Addlist'
 
 const App = () => {
 const myStyle ={
  backgroundImages:`url(${purple})`, backgroundSize:'cover' , backgroundRepeat:'no-repeat' 
  }
  const[items , setItems] = useState([
    {
      name:"Go to Bhopal",
      date:"2025/02/23",
    },
    {
      name:"Go to Indore",
      date:"2025/02/25",
    },
    {
      name:"Go to ujjain",
      date:"2025/02/26",
    },
  ])

  const AddHandler =(name , date) => {
    setItems([{name,date }, ...items])
  }

  
   return (
    
   <div className='main-container shadow-lg rounded p-3'>
  
    <Logo/>
    <Additems AddHandler={AddHandler}/>
    <Addlist items={items}/>
     </div>
   )
 }
 
 export default App
 




