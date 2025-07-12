import React from 'react'
import TodoItems from './TodoItems'

const Addlist = ({items}) => {
    
  return (
    <div className=' py-1 px-2 mt-3 text-light'>
        {
            items.map (el => <TodoItems key={el.name} name={el.name} date={el.date}/> )
        }
      

      
    </div>
  )
}

export default Addlist
