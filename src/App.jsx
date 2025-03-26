import { useState, useEffect } from 'react'
import './App.css'
import { Martinis } from './Martinis'
import { Loading } from '../../04-fundamental-projects/02-tours/starter/src/Loading'
import { Margaritas } from './Margaritas'
import {squestions, menu} from './data'
import { Questions } from './Questions'
import { Menu } from './Menu'
import { Categories } from './Categories'
import { Jobs } from './Jobs'

const martini_url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini'
const margarita_url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
const jobs_url = 'https://jobicy.com/api/v2/remote-jobs?count=5&tag=python'

const tempCategory = menu.map((item) => item.category) 
const tempSet = new Set(tempCategory)
const allCategory = ['all', ...tempSet]

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [martinis, setMartinis] = useState([])
  const [margaritas, setMargaritas] = useState([])
  const [questions, setQuestions] = useState(squestions)
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategory)
  const [jobs, setJobs] = useState([])

  const filterItems = (category) => {
    if(category === 'all'){
      setMenuItems(menu)
      return
    }
    const newItems = menu.filter((cat) => cat.category === category)
    setMenuItems(newItems)
  }
  const removeMartini = (idDrink) => {
    const newMartinis = martinis.filter((martini) => martini.idDrink != idDrink)
    setMartinis(newMartinis)
  }
  const fetchJobs = async() => {
    setIsLoading(true)
    try{
      const jobData = await fetch(jobs_url)
      const jobJson = await jobData.json()
      const jobs = jobJson.jobs

      // add index to each item
      const indexJobs = jobs.map((job,index) => ({
        ...job, index: index //Make index start at 0
      }))
  
      console.log(indexJobs)
      setJobs(indexJobs)
    }catch(error){
      console.log(error)
    }
    setIsLoading(false)
  }
  const fetchData = async() => {
    setIsLoading(true)
    try{
      // const resp = await fetch(martini_url)
      // const respmar = await fetch(margarita_url)
      // const martinisjson = await resp.json()
      // const margaritajson = await respmar.json()
      // const martinis = martinisjson.drinks
      // const margaritas = margaritajson.drinks
      // setMargaritas(margaritas)
      // setMartinis(martinis)
    }catch(error){
      console.log(error)
    }
  setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
    fetchJobs()
  },[])

  if (isLoading){
    return (
      <div>
        <Loading />
      </div>
    )
  }

  // if(martinis.length == 0){
  //   return (
  //     <div>
  //       <h2>No martinis left to see</h2>
  //       <button type='button' onClick={()=>fetchData()}>Refresh martinis</button>
  //     </div>
  //   )
  // }


  return (
  <main>
    <h1>Cocktail apps</h1>
    <Jobs jobs = {jobs}/>
    {/* <Questions questions = {questions}/> */}
    {/* <Margaritas margaritas = {margaritas}/> */}
    {/* <Martinis martinis = {martinis} removeMartini = {removeMartini} /> */}
    {/* <Categories categories={categories} filterItems = {filterItems}  /> */}
    {/* <Menu menuItems = {menuItems}/> */}
    </main>
  )
}

export default App
