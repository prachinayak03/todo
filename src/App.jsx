import { useState } from 'react'

import './App.css'
import purple from './assets/purple flower.jpg'
import Logo from './Components/Logo'

import React from 'react'
import Additems from './Components/Additems'
import Addlist from './Components/Addlist'
import Message from './Components/Message'

const App = () => {
  const myStyle = {
    backgroundImages: `url(${purple})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
  }
  const [items, setItems] = useState([])
  

  const AddHandler = (name, date) => {
    setItems([{ name, date }, ...items])
  }
  const deleteHandler = (name) => {
    setItems(items.filter(el => el.name !== name))
  }

  return (

    <div className='main-container shadow-lg rounded p-3'>

      <Logo />
      <Additems AddHandler={AddHandler} />
      {items.length == 0 ? <Message /> : < Addlist deleteHandler={deleteHandler} items={items} />}
    </div>
  )
}

export default App





