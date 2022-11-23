import './App.scss'
import Header from '../src/components/Header'
import Home from './components/HomePage/Home'
import Footer from './components/Footer'
import Market from './components/Market/Market'
import { Outlet } from 'react-router-dom'



function App() {
 

  return (
  
    <div className="App" >

    <Header/>
    
    <Outlet />
      
    <Footer/>
    </div>
  
  )
}

export default App
