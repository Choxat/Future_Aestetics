import { useState } from 'react'

import './App.scss'
import Header from '../src/components/Header'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
 

  return (
  
    <div className="App" >

    <Header/>
      
    <Home/>
      
      <Footer/>
    </div>
  
  )
}

export default App
