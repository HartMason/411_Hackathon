import React, { useState } from 'react'
import Header from './Header/Header'
import InitialList from './InitialList/InitialList'
import ListBySearchTerm from './ListBySearchTerm/ListBySearchTerm'
import SearchTermContextProvider from '../store/SearchTermContextProvider'
import AuthorContextProvider from '../store/AuthorContextProvider'
import classes from './App.module.css'

const App = () => {

// ! state and helper func for Johnnys header component
 const [searchTerm, setSearchTerm] = useState('')

 const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
 }

// TODO: me and harts logic below


const [searchByAuthor, setSearchByAuthor] = useState(false)
const [author, setAuthor] = useState('')


const handleAuthorChange = (e) => {
    setAuthor(e.target.value)
}

const searchByAuthorClickHandler = () => {
    setSearchByAuthor(prevState => !prevState)
}

const searchByNameOrAuthorRender = () => {
    if (!searchByAuthor) {
        return (
            <main className={classes.wrapper}>
                <Header searchTerm={searchTerm} handleOnChange={ (e) => handleOnChange(e) } />
                <button onClick={searchByAuthorClickHandler}>search by author</button>

                {!searchTerm ? <InitialList /> : (  <SearchTermContextProvider searchTerm={searchTerm}>
                                                            <ListBySearchTerm />
                                                        </SearchTermContextProvider>
                                                    )}
            </main> )
                    
    }  else {
        return (
            <AuthorContextProvider author={author}>
                <main className={classes.wrapper}>
                    <Header searchTerm={searchTerm} handleOnChange={ (e) => handleOnChange(e) } />
                    // TODO: Create an AuthorList component to Render the author hits, 
                     //TODO if there are none matching, render a message to the user saying so 
                     
                    <div>Search by author list goes here</div>
                </main>
            </AuthorContextProvider>
        )
    }
}

  return (
   <>
       {searchByNameOrAuthorRender()}
   </>
  )
}

export default App