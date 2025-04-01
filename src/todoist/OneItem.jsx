import React from 'react'

export const OneItem = ({item, removeItem, editItem}) => {
  return (
    <div>
        <input type="checkbox" checked={item.completed} onChange={() => editItem(item.id)}/>
        <p style={{textDecoration: item.completed && 'line-through'}}>{item.name}</p>
        <button type="button" onClick={() => removeItem(item.id)}>delete</button>
    </div>
  )
}
