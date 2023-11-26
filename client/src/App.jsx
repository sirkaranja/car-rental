import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import NavbaMain from '../src/Components/Navbar/Navbar'
import Coursel from '../src/Components/Coursel/coursel'
import SearchBar from '../src/Components/SearchBar/searchbar'
import Desc from '../src/Components/Main-part/Desc'
import Footer from '../src/Components/Footer/Footer'
import About from '../src/Components/About/about'
import Fleet from '../src/Components/Fleets/Fleet'
import Services from '../src/Components/Services/services'
import Contact from '../src/Components/Contact/Contact'
import Admindash from './Components/Admindashboard/Admindash'
function App() {


  return (

<BrowserRouter>
<NavbaMain />
<Routes>
  <Route path='/' element={<Desc/>} />
  <Route path='/About' element={<About/>} />
  <Route path='/fleet' element={<Fleet/>} />
  <Route path='/services' element={<Services/>} />
  <Route path='/contact' element={<Contact/>} />
</Routes>
</BrowserRouter>
  )
}

export default App
