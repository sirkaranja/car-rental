import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavbaMain from '../src/Components/Navbar/Navbar'
import Coursel from '../src/Components/Coursel/coursel'
import SearchBar from '../src/Components/SearchBar/searchbar'
import Desc from '../src/Components/Main-part/Desc'
function App() {


  return (
    <><NavbaMain />
    <Coursel />
    < SearchBar />
    < Desc />
    
    </>

  )
}

export default App
