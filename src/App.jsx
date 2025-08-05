import { useState } from 'react'
import './App.css'
import ColorInput from './ColorInput'

function App() {
  const [color, setColor] = useState('#FF0000')

  return (
    <>
      <div style={{
        backgroundColor: color,
        height: '200px',
        width: '200px'
      }}></div>
      <h1>Howdy!</h1>
      <ColorInput color={color} setColor={setColor}/>
    </>
  )
}

export default App
