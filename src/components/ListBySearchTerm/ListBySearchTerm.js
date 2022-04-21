import React, { useContext } from 'react'
import SearchTermContext from '../../store/search-term-context'

import classes from './ListBySearchTerm.module.css'

const ListBySearchTerm = () => {
    const fetchSearchTermContext = useContext(SearchTermContext)


const data = fetchSearchTermContext.map(( item, index )=> {
    return (
        <>
            <li className={classes.title} key={index}>
                {item.title}
            </li>
            <a className={classes.link} key={item.objectID} href={item.url}>
                {item.url}
            </a>
            <div className={classes.info} key={Math.random()}>
                <span className={classes['info-items']}>Points: <b>{item.points}</b></span>
                <span className={classes['info-items']}> | </span>
                <span className={classes['info-items']}>Created by: <b>{item.author}</b></span>
                <span className={classes['info-items']}> | </span>
                <span className={classes['info-items']}>Created at: <b>{item.created_at}</b></span>
            </div>
            <hr />
        </>
    )
})


  return (
    <ul>{ data.length === 0 ? <h1>Loading...</h1> : data }</ul>
  )
}

export default ListBySearchTerm