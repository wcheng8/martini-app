import React from 'react'
import { SwitchButton } from './SwitchButton'
import { SingleJob } from './SingleJob'
import { useState } from 'react'

export const Jobs = ({jobs, currentIndex}) => {
  return (
    <section>
         <SingleJob jobs = {jobs} currentIndex = {currentIndex}/>
    </section>
  )
}
