import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Carousal from './components/Carousal'
import Home from './components/Home'
import { Route,BrowserRouter, Routes} from 'react-router-dom'
import Search from './components/pages/Search'
import Categories from './components/pages/Categories'
import Browse from './components/pages/Browse'
import Surprise from './components/pages/Surprise'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 

<div className='mx-[5rem]'>
  <BrowserRouter>
  <Navbar/>

  <Routes>
    <Route path='/' element={<Home/>}/>
     <Route path="/search" element={<Search />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/surprise" element={<Surprise />} />
  </Routes>

  </BrowserRouter>
</div>






    </>
  )
}

export default App
