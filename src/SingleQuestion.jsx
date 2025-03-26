import React from 'react'
import { useState } from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

export const SingleQuestion = ({id, question, answer}) => {
    const [showAnswer, isShowAnswer] = useState(false)
  return (
    <section>
        <div>
            <h4>{question}</h4>
            <button type='button' onClick={() =>{isShowAnswer(!showAnswer)}}>{showAnswer? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
        </div>
        {showAnswer && <h5>{answer}</h5>}
    </section>
    )
}
