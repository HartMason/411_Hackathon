import React, { useState, useContext } from 'react'
import FrontPageContext from '../store/front-page-context'
import Header from './Header/Header'

const App = () => {
// ! state and helper func for Johnnys header component
 const [searchTerm, setSearchTerm] = useState('')

 const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
 }

// ! state and functions for me and Hart below

const FetchFrontPageContext = useContext(FrontPageContext)

console.log(FetchFrontPageContext)










  return (
    <main>
        <Header searchTerm={searchTerm} onChange={ (e) => handleOnChange(e) }/>
    </main>
  )
}

export default App