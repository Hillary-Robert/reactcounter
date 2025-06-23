import React, { useState } from 'react'
import { FaMinus, FaPlus, FaRedo, FaUndo  } from "react-icons/fa";

function Counter() {

  const [history, setHistory] = useState([0])
  const [count, setCount] = useState(0)

 



const subtract = ()=>{
  const newCount = count - 1
  setCount(newCount)
  setHistory([...history, newCount])

}


const addition = ()=>{

  const newCount = count + 1

  setCount(newCount)

  setHistory([...history, newCount])
  
}

console.log(history);



  return (
    <div className='mt-8 flex gap-4 flex-col'>

      <h2>The count value is:</h2>

      <p className='text-8xl'>{count}</p>

      <div className='flex gap-4 flex-row justify-center items-center'>

        <button onClick={subtract}>
          <FaMinus />
        </button>

        <button onClick={addition}>
          <FaPlus />
        </button>

      </div>


      <div className='flex gap-4 flex-row justify-center items-center'>

        <button>
          <FaUndo />
        </button>

        <button>
          <FaRedo />
        </button>

      </div>

      


    </div>
  )
}

export default Counter