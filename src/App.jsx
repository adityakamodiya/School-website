import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import About from './About'
import Academics from './Academics'
import Admissions from './Admissions'
import Faculty from './Faculty'
import Students from './Students'
import Gallery from './Gallery'

import Contact from './Contact'
function App() {
  return (
    <>


    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/'element={<Home />}></Route>
      <Route path='/About us'element={<About/>}></Route>
      <Route path='Academics'element={<Academics/>}></Route>
      <Route path='Admissions'element={<Admissions/>}></Route>
      
      <Route path='faculty'element={<Faculty/>}></Route>
      
      <Route path='Students'element={<Students/>}></Route>
      <Route path='Gallery'element={<Gallery/>}></Route>
    </Routes>
    </BrowserRouter>

{/* <Home/> */}
    </>
  )
}

export default App
