import { useState } from 'react'
import './App.css'
import Counter from './Counter/Counter'

function App() {
  

  return (
    <>
    <div className='flex flex-col gap-8 mt-8'>

      <h1>This is a Counter App which include Redo and Undo Functions</h1>


      <div className='flex flex-col border border-white-900 py-8'>

      <h3>Hello</h3>

      <Counter/>

      
    </div>  
      

    </div > 

    
    </>
  )
}

export default App
