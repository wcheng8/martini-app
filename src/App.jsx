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
import { SwitchButton } from './SwitchButton'
import { SlickCarousel } from './SlickCarousel'
import { Form } from './ColorApp/Form'
import { ColorList } from './ColorApp/ColorList'
import { ToastContainer, toast } from 'react-toastify'
import Values from 'values.js';
import { Items } from './todoist/Items'
import { GroceryForm } from './todoist/GroceryForm'
import { nanoid } from 'nanoid'

const martini_url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini'
const margarita_url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
const jobs_url = 'https://jobicy.com/api/v2/remote-jobs?count=5&tag=python'
const quote_url = 'https://api.realinspire.live/v1/quotes/random?limit=5'

const tempCategory = menu.map((item) => item.category) 
const tempSet = new Set(tempCategory)
const allCategory = ['all', ...tempSet]
const defaultList = JSON.parse(localStorage.getItem('list')||'[]')
const setLocalStorage = (items) => {
  localStorage.setItem('list',JSON.stringify(items))
}
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [martinis, setMartinis] = useState([])
  const [margaritas, setMargaritas] = useState([])
  const [questions, setQuestions] = useState(squestions)
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategory)
  const [jobs, setJobs] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [quotes, setQuotes] = useState([])
  const [colors, setColors] = useState(new Values('#f15025').all(20))
  const [items, setItems] = useState(defaultList)

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

  const fetchQuotes = async() => {
    setIsLoading(true)
    try{
      const quotesData = await fetch(quote_url)
      const quotesJson = await quotesData.json()
      console.log(quotesJson)
      setQuotes(quotesJson)
    }catch(error){
      console.log(error)
    }
    setIsLoading(false)
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
    // fetchQuotes()
    // fetchData()
    // fetchJobs()
  },[])

  // if (isLoading){
  //   return (
  //     <div>
  //       <Loading />
  //     </div>
  //   )
  // }

  // if(martinis.length == 0){
  //   return (
  //     <div>
  //       <h2>No martinis left to see</h2>
  //       <button type='button' onClick={()=>fetchData()}>Refresh martinis</button>
  //     </div>
  //   )
  // }

  const addColor = (color) => {
    try {
      const colorarray = new Values(color).all(20)
      setColors(colorarray)
    } catch (error){
      toast.error(error.message)
    }
  }

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid()
    }
    const newItems = [...items, newItem]
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('item added to the list')
  }

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId)
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('item deleted')
  }

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if(item.id === itemId){
        const newItem = {...item, completed: !item.completed}
        return newItem
      }
      return item
    })
    setItems(newItems)
    setLocalStorage(newItems)
  }

  return (
  <main>
    <h1>Cocktail apps</h1>
    <h2>Grocery list for the cocktails</h2>
    <ToastContainer position='top-center' />
    <GroceryForm addItem = {addItem}/>
    <Items items = {items} removeItem = {removeItem} editItem = {editItem}/>


    {/* <h2>choose the color shade for your Cocktail</h2>
    <ToastContainer position='top-center'/>
    <Form addColor={addColor}/>
    <ColorList colors={colors}/> */}

    {/* <SwitchButton jobs = {jobs} currentIndex = {currentIndex} setCurrentIndex = {setCurrentIndex}/> */}
    {/* <Jobs jobs = {jobs} currentIndex={currentIndex}/> */}
    {/* <SlickCarousel quotes = {quotes} /> */}
    {/* <Questions questions = {questions}/> */}
    {/* <Margaritas margaritas = {margaritas}/> */}
    {/* <Martinis martinis = {martinis} removeMartini = {removeMartini} /> */}
    {/* <Categories categories={categories} filterItems = {filterItems}  /> */}
    {/* <Menu menuItems = {menuItems}/> */}
    </main>
  )
}

export default App
