import React from 'react'

export const SingleJob = ({jobs}) => {
    const {id, url, jobTitle, companyName, jobExcerpt, jobIndustry} = jobs[0]
    return (
    <div>
        <h4>{jobTitle}</h4>
        <h4>{jobIndustry}</h4>
        <p>{companyName}</p>
        <p>{jobExcerpt}</p>
        <p>{url}</p>
    </div>
  )
}
