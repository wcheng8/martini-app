import React from 'react'

export const Categories = ({categories, filterItems}) => {
  return (
    <section>
        {categories.map((item) => {
            return <button type='button' onClick={() => {filterItems(item)}}key={item} >{item}</button>
        })}
    </section>
  )
}
