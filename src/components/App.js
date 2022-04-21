import React, { useState } from 'react'
import Header from './Header/Header'
import InitialList from './InitialList/InitialList'
import ListBySearchTerm from './ListBySearchTerm/ListBySearchTerm'
import SearchTermContextProvider from '../store/SearchTermContextProvider'
import classes from './App.module.css'

const App = () => {

// ! state and helper func for Johnnys header component
 const [searchTerm, setSearchTerm] = useState('')

 const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
 }

// TODO: Hart! we have duplication of code inside our InitialList and ListBySearchTerm component 
// TODO: Can you extract the duplicated logic and create a single list item component with the necessary props


  return (
    <main className={classes.wrapper}>

        <Header searchTerm={searchTerm} handleOnChange={ (e) => handleOnChange(e) } />

        {!searchTerm ? <InitialList /> : (  <SearchTermContextProvider searchTerm={searchTerm}>
                                                <ListBySearchTerm />
                                            </SearchTermContextProvider>
                                        )}
       
        
    </main>
  )
}

export default App