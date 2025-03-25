import React from 'react'
import {Martini} from './Martini'

export const Martinis = ({martinis, removeMartini}) => {
  return (
    <section>
        <h1>Choose from a list of martinis and remove the ones you don't like!</h1>
    <div>
        {martinis.map((martini) => {
            return <Martini key={martini.idDrink} {... martini} removeMartini = {removeMartini}/>
        })}
    </div>

    </section>
  )
}
