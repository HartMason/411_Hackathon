import React, { useState } from 'react'

import Header from './Header/Header'
import InitialList from './InitialList/InitialList'
import ListBySearchTerm from './ListBySearchTerm/ListBySearchTerm'
import classes from './App.module.css'

const App = () => {
// ! state and helper func for Johnnys header component
// ! once you set your header inputs onChange to this state the app will begin to work
 const [searchTerm, setSearchTerm] = useState('')

 const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
 }


// ! Me and hart will handle everything below here





  return (
    <main className={classes.wrapper}>
        <Header searchTerm={searchTerm} onChange={ (e) => handleOnChange(e) } />
        {searchTerm ? <ListBySearchTerm /> : <InitialList />}
       
        
    </main>
  )
}

export default App