import React, { useState, useContext } from 'react'
import FrontPageContext from '../store/front-page-context'
import Header from './Header/Header'
import classes from './App.module.css'

const App = () => {
// ! state and helper func for Johnnys header component
 const [searchTerm, setSearchTerm] = useState('')

 const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
 }


// ! state and functions for me and Hart below
// all inital front page search results array from the fetch request are saved in this variable
const FetchFrontPageContext = useContext(FrontPageContext)



const data = FetchFrontPageContext.map((item, index )=> {
    return (
        <>
            <li className={classes.title} key={index}>
                {item.title}
            </li>
            <a className={classes.link} key={item.objectID} href={item.url}>
                {item.url}
            </a>
            <div className={classes.info} key={Math.random()}>
                <span className={classes['info-items']}>Created at: {item.created_at}</span>
                <span className={classes['info-items']}> | </span>
                <span className={classes['info-items']}>Created by: {item.author}</span>
                <span className={classes['info-items']}> | </span>
                <span className={classes['info-items']}>Points: {item.points}</span>
            </div>
            <hr />

        </>
    )
})




  return (
    <main className={classes.wrapper}>
        <Header searchTerm={searchTerm} onChange={ (e) => handleOnChange(e) } />
        <ul>
          { data.length === 0 ? <h1>Loading Results...</h1> : data }
        </ul>
    </main>
  )
}

export default App