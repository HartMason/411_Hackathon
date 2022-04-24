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
    

 const [searchTerm, setSearchTerm] = useState('building')
 const [author, setAuthor] = useState('rob')
 const [date, setDate] = useState('02')
 const [searchByAuthor, setSearchByAuthor] = useState(false)
 const [searchByDate, setSearchByDate] = useState(false)

const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
 }


const handleAuthorChange = (e) => {
    setAuthor(e.target.value)
}

const handleDateChange = (e) => {
    setDate(e.target.value)
}

const searchByAuthorClickHandler = () => {
    setSearchByAuthor(prevState => !prevState)
}


const searchByDateClickHandler = () => {
    setSearchByDate(prevState => !prevState)
}


const searchByTitleOrDateOrAuthorRender = () => {
if (!searchByDate && !searchByAuthor) {
    return (
     <>
        <Header searchTerm={searchTerm} handleOnChange={ (e) => handleSearchChange(e) } />
        <main className={classes.wrapper}>
            <button onClick={searchByAuthorClickHandler} className={classes.pushable}><span className={classes.front}>Search by Author</span></button>
            <button onClick={searchByDateClickHandler} className={classes.pushable}><span className={classes.front}>Search by Date</span></button>

            {!searchTerm ? <InitialList /> : (  <SearchTermContextProvider searchTerm={searchTerm}>
                                                            <ListBySearchTerm />
                                                        </SearchTermContextProvider>
                                                    )}
        </main> 
    </>) }     
else if (!searchByAuthor && searchByDate) {
    return (
        <DateContextProvider date={date}>
            <Header searchTerm={searchByDate} handleOnChange={(e) => handleDateChange(e)} />
            <main className={classes.wrapper}>
                <button onClick={searchByDateClickHandler} className={classes.pushable}><span className={classes.front}>Search by Title</span></button>
                
                {/*// ! Harts <ListByDate /> component goes here //*/}
            </main>
        </DateContextProvider> )
          
    }  
else if (searchByAuthor && !searchByDate) {
     return (
        <AuthorContextProvider author={author}>
            <Header searchTerm={author} handleOnChange={ (e) => handleAuthorChange(e) } />
            <main className={classes.wrapper}>
                <button onClick={searchByAuthorClickHandler} className={classes.pushable}><span className={classes.front}>Search by Title</span></button>
                <ListByAuthor />
            </main>
        </AuthorContextProvider>
        )
    }
}

  return (
   <>
       {searchByTitleOrDateOrAuthorRender()}
   </>
  )
}

export default App