import React from 'react'
import { SwitchButton } from './SwitchButton'
import { SingleJob } from './SingleJob'
import { useState } from 'react'

export const Jobs = ({jobs}) => {
const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <section>
        <SwitchButton jobs = {jobs} currentIndex = {currentIndex} setCurrentIndex = {currentIndex}/>
         <SingleJob jobs = {jobs} currentIndex = {currentIndex}/>
    </section>
  )
}
