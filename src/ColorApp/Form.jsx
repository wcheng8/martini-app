import React, { useState } from 'react'

export const Form = ({addColor}) => {
  const [color, setColor] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    addColor(color)
  }
  return (
    <section>
    <form onSubmit={handleSubmit}>
        <input type='color' value={color} onChange={(e) => setColor(e.target.value)}></input>
        <input type = 'text' value={color} onChange={(e) => setColor(e.target.value)} placeholder='#f15025'></input>
        <button type='submit' style={{background: color}}>Submit</button>
    </form>
    </section>
  )
}
