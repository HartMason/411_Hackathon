import React, { useState } from 'react'
import Header from './Header/Header'
import InitialList from './InitialList/InitialList'
import ListBySearchTerm from './ListBySearchTerm/ListBySearchTerm'
import SearchTermContextProvider from '../store/SearchTermContextProvider'
import AuthorContextProvider from '../store/AuthorContextProvider'
import ListByAuthor from './ListByAuthor/ListByAuthor'
import classes from './App.module.css'
import ListByAuthor from './ListByAuthor/ListByAuthor'

const App = () => {

// ! state and helper func for Johnnys header component
 const [searchTerm, setSearchTerm] = useState('')

 const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
 }

// TODO: Me and harts logic below

const [searchByAuthor, setSearchByAuthor] = useState(false)
const [author, setAuthor] = useState('cgaebel')


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
                <button onClick={searchByAuthorClickHandler} className={classes.pushable}><span className={classes.front}>Search by Author</span></button>

                {!searchTerm ? <InitialList /> : (  <SearchTermContextProvider searchTerm={searchTerm}>
                                                            <ListBySearchTerm />
                                                        </SearchTermContextProvider>
                                                    )}
            </main> )
                    
    }  else {
        return (
            <AuthorContextProvider author={author}>
                <main className={classes.wrapper}>
                    <Header searchTerm={author} handleOnChange={ (e) => handleAuthorChange(e) } />

                    
                  
                   

                    <button onClick={searchByAuthorClickHandler}className={classes.pushable}><span className={classes.front}>Search by Title</span></button>
                    <ListByAuthor />
                   

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