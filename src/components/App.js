import React, { useState } from 'react'
import Header from './Header/Header'
import InitialList from './InitialList/InitialList'
import ListBySearchTerm from './ListBySearchTerm/ListBySearchTerm'
import SearchTermContextProvider from '../store/SearchTermContextProvider'
import AuthorContextProvider from '../store/AuthorContextProvider'
import DateContextProvider from '../store/DateContextProvider'
import ListByAuthor from './ListByAuthor/ListByAuthor'
import classes from './App.module.css'


const App = () => {

// ! state and helper func for Johnnys header component
 const [searchTerm, setSearchTerm] = useState('')

 const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
 }

// the rest of the application state and helper funcs

const [searchByAuthor, setSearchByAuthor] = useState(false)
const [author, setAuthor] = useState('rob')
const [date, setDate] = useState('january')
const [searchByDate, setSearchByDate] = useState(false)


const handleAuthorChange = (e) => {
    setAuthor(e.target.value)
}

const searchByAuthorClickHandler = () => {
    setSearchByAuthor(prevState => !prevState)
}

const handleDateChange = (e) => {
    setDate(e.target.value)
}

const searchByDateClickHandler = () => {
    setSearchByDate(prevState => !prevState)
}



const searchByNameOrDateOrAuthorRender = () => {
    if (!searchByDate && !searchByAuthor) {
        return (
            <main className={classes.wrapper}>
                <Header searchTerm={date} handleOnChange={ (e) => handleOnChange(e) } />
                <button onClick={searchByAuthorClickHandler} className={classes.pushable}><span className={classes.front}>Search by Author</span></button>
                <button onClick={searchByDateClickHandler} className={classes.pushable}><span className={classes.front}>Search by Date</span></button>

                {!searchTerm ? <InitialList /> : (  <SearchTermContextProvider searchTerm={searchTerm}>
                                                            <ListBySearchTerm />
                                                        </SearchTermContextProvider>
                                                    )}
            </main> )
        
    }
    else if (!searchByAuthor && searchByDate) {
        return (
        <DateContextProvider date={date}>
            <main className={classes.wrapper}>
                <Header searchTerm={searchByDate} handleOnChange={(e) => handleDateChange(e)} />
                <button onClick={searchByDateClickHandler} className={classes.pushable}><span className={classes.front}>Search by Title</span></button>
                
                {/*// ! Harts <ListByDate /> component goes here //*/}
            </main>
        </DateContextProvider> )
           
                    
    }  else if (searchByAuthor && !searchByDate) {
        return (
            <AuthorContextProvider author={author}>
                <main className={classes.wrapper}>
                    <Header searchTerm={author} handleOnChange={ (e) => handleAuthorChange(e) } />

                    <button onClick={searchByAuthorClickHandler} className={classes.pushable}><span className={classes.front}>Search by Title</span></button>
                    <ListByAuthor />
                   

                </main>
            </AuthorContextProvider>
        )
    }
}

  return (
   <>
       {searchByNameOrDateOrAuthorRender()}
   </>
  )
}

export default App