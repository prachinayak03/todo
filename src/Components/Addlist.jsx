import React from 'react'
import TodoItems from './TodoItems'

const Addlist = ({items , deleteHandler}) => {
    
  return (
    <div className=' py-1 px-2 mt-3 text-light'>
        {
            items.map (el => <TodoItems key={el.name} name={el.name} date={el.date} 
              deleteHandler={deleteHandler}/> )
        }
      

      
    </div>
  )
}

export default Addlist
