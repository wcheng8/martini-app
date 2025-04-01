import React from 'react'
import { toast } from 'react-toastify'

export const Color = ({index, color}) => {
    const {hex, weight} = color
    const saveToClipboard = async () => {
        if(navigator.clipboard){
            try{
                await navigator.clipboard.writeText(`#${hex}`)
                toast.success(`Color #${hex} copied to clipboard`)
            }catch (error)
            {
                toast.error('Failed to copy color to clipboard')
            }
        } else {
            toast.error('Clipboard access not available')
        }
    }
  return (
    <div className= {index > 5 ? 'color color-light' : 'color'} style={{background: `#${hex}`}}>
        <p className='percent-value'>{weight}%</p>
        <p className='color-value' onClick={saveToClipboard} >#{hex}</p>
    </div>
  )
}
