import React, {useState} from 'react'
import { toast } from 'react-toastify'

export const GroceryForm = ({addItem}) => {
  const [newItem, setNewItem] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) {
      toast.error('please provide value')
      return
    }
    addItem(newItem)
    setNewItem('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newItem} onChange={(e)=>setNewItem(e.target.value)}/>
        <button type='submit'>add item</button>
      </form>
    </div>
  )
}
