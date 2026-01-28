import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]=useState(15);
 
//let counter = 15;
const addvalue =()=>{
 // counter = counter+1;
  setcounter(counter +1)
}
const removevalue=()=>{
  setcounter(counter -1)
}
  return (
    <>
     <h1>Chai aur React</h1>
     <h3>Counter value:{counter}</h3>
     <button onClick={addvalue}>Add value</button>
    <br/>
    <button onClick={removevalue}>Remove value</button>     
    </>
  )
}

export default App
