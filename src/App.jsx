import React from 'react'
import Navbar from './components/Navbar'
import FoodItemCard from './components/FoodItemCard'
import { Api } from './components/Api'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <FoodItemCard ApiData={Api}/>
      <Footer/>
    </div>
  )
}

export default App
