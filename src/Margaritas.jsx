import React from 'react'
import { useState } from 'react'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

export const Margaritas = (margaritas) => {
  const [index, setIndex] = useState(0)
  const {strDrink, strGlass, strDrinkThumb, strInstructions } = margaritas.margaritas[index]
  const nextDrink = () => {
    let newIndex = index + 1
    newIndex = newIndex % margaritas.margaritas.length
    setIndex(newIndex)
  }

  const prevDrink = () => {
    let newIndex = index - 1
    newIndex = (newIndex + margaritas.margaritas.length) % margaritas.margaritas.length
    setIndex(newIndex)
  }

  const supriseDrink = () => {
    let newIndex = Math.floor(Math.random()*margaritas.margaritas.length)
    newIndex = newIndex % margaritas.margaritas.length
    if(newIndex === index){
      newIndex = newIndex + 1
    }
    newIndex = newIndex % margaritas.margaritas.length
    setIndex(newIndex)
  }

  return (
    <main>
    <h3>Magarita slider</h3>
    <h4>{strDrink}</h4>
    <img src={strDrinkThumb} alt={strDrink} />
    <p>{strGlass}</p>
    <p>{strInstructions}</p>
    <div>
      <button type='button' onClick={prevDrink}><FaChevronLeft /></button>
      <button type='button' onClick={nextDrink}><FaChevronRight /></button>
    </div>
    <button type='button' onClick={supriseDrink}>Suprise Me!</button>
    </main>
  )
}
