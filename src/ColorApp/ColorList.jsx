import React from 'react'
import { Color } from './Color'
import { nanoid } from 'nanoid';

export const ColorList = ({colors}) => {
  return (
    <div>
        {colors.map((color,index) => {
            return <Color key={nanoid()} color={color} index={index}/>
        })}
    </div>
  )
}
