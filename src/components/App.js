import React, { useState } from 'react'
import Header from './Header/Header'
import InitialList from './InitialList/InitialList'
import ListBySearchTerm from './ListBySearchTerm/ListBySearchTerm'
import SearchTermContextProvider from '../store/SearchTermContextProvider'
import AuthorContextProvider from '../store/AuthorContextProvider'
import DateContextProvider from '../store/DateContextProvider'
import ListByAuthor from './ListByAuthor/ListByAuthor'
import classes from './App.module.css'
import ListByDate from './ListByDate/ListByDate'
import Button from './Button/Button'


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
        <SearchTermContextProvider searchTerm={searchTerm}>
        <Header searchTerm={searchTerm} handleOnChange={ (e) => handleSearchChange(e) } />
        <main className={classes.wrapper}> 
        <Button onClick={searchByAuthorClickHandler} searchBy="Author"/>
        
         <Button onClick={searchByDateClickHandler} searchBy="Date"/>               
          

            {!searchTerm ? <InitialList /> : <ListBySearchTerm />}
        </main> 
    </SearchTermContextProvider>) }     
else if (!searchByAuthor && searchByDate) {
    return (
        <DateContextProvider date={date}>
            <Header searchTerm={searchByDate} handleOnChange={(e) => handleDateChange(e)} />
            <main className={classes.wrapper}>
                <Button onClick={searchByDateClickHandler} searchBy="Title"/>
               
                
               <ListByDate />
            </main>
        </DateContextProvider> )
          
    }  
else if (searchByAuthor && !searchByDate) {
     return (
        <AuthorContextProvider author={author}>
            <Header searchTerm={author} handleOnChange={ (e) => handleAuthorChange(e) } />
            <main className={classes.wrapper}>
                <Button onClick={searchByAuthorClickHandler} searchBy="Title"/>
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