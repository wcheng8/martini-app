import { useState, useEffect } from 'react'
import './App.css'
import { Martinis } from './Martinis'
import { Loading } from '../../04-fundamental-projects/02-tours/starter/src/Loading'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [martinis, setMartinis] = useState([])

  const removeMartini = (idDrink) => {
    const newMartinis = martinis.filter((martini) => martini.idDrink != idDrink)
    setMartinis(newMartinis)
  }
  const fetchData = async() => {
    setIsLoading(true)
    try{
      const resp = await fetch(url)
      const martinisjson = await resp.json()
      const martinis = martinisjson.drinks
      console.log(martinis)
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
  <>
    <Martinis martinis = {martinis} removeMartini = {removeMartini} />
  </>
  )
}

export default App
