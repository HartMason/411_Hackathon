import React, { useContext } from 'react'
import FrontPageContext from '../../store/front-page-context'

import classes from './InitialList.module.css'

const InitialList = () => {

    const FetchFrontPageContext = useContext(FrontPageContext)

    const data = FetchFrontPageContext.map((item, index )=> {
        return (
            <div className={classes.hovers}>
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
            </div>
        )
    })





  return (
    <ul>
          { data.length === 0 ? <h1>Loading Results...</h1> : data }
        </ul>
  )
}

export default InitialList