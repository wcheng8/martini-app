import React from 'react'
import { useState } from 'react'

export const Martini = ({idDrink, strDrink, strDrinkThumb, strInstructions, strCategory, strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5, removeMartini}) => {
    const [readMore, setReadMore] = useState(false)
  return (
    <div>
        <img src={strDrinkThumb} alt={strDrink} />
        <h2>{strDrink}</h2>
        <h5>{strCategory}</h5>
        <h5>Ingredients: {strIngredient1} {strIngredient2} {strIngredient3} {strIngredient4} {strIngredient5}</h5>
        <h5>{readMore? strInstructions : `${strInstructions.substring(0,20)}...`}
            <button type='button' onClick={()=>setReadMore(!readMore)}>{readMore ? 'show less' : 'read more'}</button>
        </h5>
        <button type='button' onClick={()=>{removeMartini(idDrink)}}>Remove</button>
    </div>
  )
}
