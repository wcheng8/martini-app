import React from 'react'

export const MenuItems = ({title, price, img, desc}) => {
  return (
    <main>
        <img src={img} alt={title} style={{height: "300px", width: "300px"}}/>
        <h4>{title}</h4>
        <p>{price}</p>
        <p>{desc}</p>
    </main>
  )
}
