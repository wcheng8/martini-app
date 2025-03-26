import React from 'react'
import { MenuItems } from './MenuItems'

export const Menu = ({menuItems}) => {
  return (
    <main>
        <h2>Are you Hangry?</h2>
        {menuItems.map((items) => {
            return <MenuItems key = {items.id} {...items}/>
        })}
    </main>
  )
}
