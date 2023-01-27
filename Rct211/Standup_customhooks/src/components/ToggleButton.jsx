import React from 'react'
import { useToggle } from '../hooks/useToggle'

const ToggleButton = () => {
    const [toggle, item] = useToggle(["A", "B", "C", "D", "E", "F"])
  
  return (
    <div>
       <h1>Toggle Item : {item}</h1>
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}

export default ToggleButton