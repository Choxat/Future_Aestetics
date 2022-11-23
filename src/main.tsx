import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Header from './components/Header'
import Home from './components/HomePage/Home'
import Market from './components/Market/Market'
import './index.scss'


const router = createBrowserRouter([
  {
    path:"",
    element: <App/>,
    children: [
      {
        path:"/",
        element: <Home/>,
      },
      {
        path:"/market",
        element: <Market/>,
      }
    ]
  },
  
])



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
