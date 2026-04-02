import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Academics from './pages/Academics'
import Admissions from './pages/Admissions'
import Faculty from './pages/Faculty'
import Students from './pages/Students'
import Gallery from './pages/Gallery'
import Map from './pages/Map'
// import Contact from './Contact'
function App() {
  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden selection:bg-primary-100 selection:text-primary-900">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/'element={<Home />}></Route>
      <Route path='/About us'element={<About/>}></Route>
      <Route path='Academics'element={<Academics/>}></Route>
      <Route path='Admissions'element={<Admissions/>}></Route>
      
      <Route path='faculty'element={<Faculty/>}></Route>
      
      <Route path='Students'element={<Students/>}></Route>
      <Route path='Gallery'element={<Gallery/>}></Route>
      <Route path='Address'element={<Map/>}></Route>
    </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
