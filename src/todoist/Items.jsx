import React from 'react'
import { OneItem } from './OneItem'

export const Items = ({items, removeItem, editItem}) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <OneItem key={item.id} item={item} removeItem = {removeItem} editItem = {editItem} />
        )
      })}
    </div>
  )
}
