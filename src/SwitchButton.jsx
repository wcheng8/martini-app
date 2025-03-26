import React from 'react'

export const SwitchButton = ({jobs}) => {
    console.log(jobs)
  return (
    <div>
        {jobs.map((job) => {
            return <button type='button' key={job.id} >{job.companyName}</button>
        })}
    </div>
  )
}
