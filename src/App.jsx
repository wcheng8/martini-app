import { useState, useEffect } from 'react'
import './App.css'
import { Martinis } from './Martinis'
import { Loading } from '../../04-fundamental-projects/02-tours/starter/src/Loading'
import { Margaritas } from './Margaritas'
import {squestions} from './data'
import { Questions } from './Questions'

const martini_url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini'
const margarita_url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [martinis, setMartinis] = useState([])
  const [margaritas, setMargaritas] = useState([])
  const [questions, setQuestions] = useState(squestions)

  const removeMartini = (idDrink) => {
    const newMartinis = martinis.filter((martini) => martini.idDrink != idDrink)
    setMartinis(newMartinis)
  }
  const fetchData = async() => {
    setIsLoading(true)
    try{
      const resp = await fetch(martini_url)
      const respmar = await fetch(margarita_url)
      const martinisjson = await resp.json()
      const margaritajson = await respmar.json()
      const martinis = martinisjson.drinks
      const margaritas = margaritajson.drinks
      setMargaritas(margaritas)
      setMartinis(martinis)
    }catch(error){
      console.log(error)
    }
  setIsLoading(false)
  }


  useEffect(() => {
    fetchData()
  },[])

  if (isLoading){
    return (
      <div>
        <Loading />
      </div>
    )
  }

  if(martinis.length == 0){
    return (
      <div>
        <h2>No martinis left to see</h2>
        <button type='button' onClick={()=>fetchData()}>Refresh martinis</button>
      </div>
    )
  }
  return (
  <main>
    <h1>Cocktail apps</h1>
    <Questions questions = {questions}/>
    <Margaritas margaritas = {margaritas}/>
    <Martinis martinis = {martinis} removeMartini = {removeMartini} />
    </main>
  )
}

export default App
