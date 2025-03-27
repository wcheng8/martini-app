import React from 'react'

export const SwitchButton = ({jobs, currentIndex, setCurrentIndex}) => {
  return (
    <div>
        {jobs.map((job) => {
            return <button type='button' key={job.id} onClick={()=>{setCurrentIndex(job.index)}} style={{color: job.index === currentIndex? 'blue' : 'black'}}>{job.companyName}</button>
        })}
    </div>
  )
}
