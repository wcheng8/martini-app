import React from 'react'
import { SingleQuestion } from './SingleQuestion'

export const Questions = ({questions}) => {
  return (
    <section>
        <h2>Questions to ask when you are sober</h2>
        {questions.map((question) =>{
            return <SingleQuestion key={question.id} {...question}/>
        })}
        <p>You should probably sober up!</p>
    </section>
  )
}
