import React, { useState } from 'react'
import { FaMinus, FaPlus, FaRedo, FaUndo  } from "react-icons/fa";

function Counter() {

  const [history, setHistory] = useState([0])
  const [count, setCount] = useState(0)
 

 
const currentValue = history[count]

const countValue = (newValue)=>{
  const newHistory = history.splice(0, count + 1)
  setHistory([...newHistory, newValue])
  setCount(count + 1)
}


const subtract = ()=>countValue(currentValue -1)

const addition = ()=>countValue(currentValue + 1)



const undo = ()=>{

  if(count > 0){
    setCount(count - 1)
  }


}
  



const redo = ()=>{

  if(count < history.length - 1 ){
    setCount(count + 1)
  }
  
}



  return (
    <div className='mt-8 flex gap-4 flex-col'>

      <h2>The count value is:</h2>

      <p className='text-8xl'>{currentValue}</p>

      <div className='flex gap-4 flex-row justify-center items-center'>

        <button onClick={subtract}>
          <FaMinus />
        </button>

        <button onClick={addition}>
          <FaPlus />
        </button>

      </div>


      <div className='flex gap-4 flex-row justify-center items-center'>

        <button onClick={undo} disabled={count === 0}>
          <FaUndo />
        </button>

        <button onClick={redo}  disabled={count === history.length-1}>
          <FaRedo />
        </button>

      </div>

      


    </div>
  )
}

export default Counter