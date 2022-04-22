import React from 'react'
import classes from './SingleListItem.module.css'

const SingleListItem = ({ url, title, points, author, created_at}) => {
  return (
            <div className={classes.hovers}>
            <li className={classes.title} >
                {title}
            </li>
            <a className={classes.link} href={url}>
                {url}
            </a>
            <div className={classes.info} >
                <span className={classes['info-items']}>Points: <b>{points}</b></span>
                <span className={classes['info-items']}> | </span>
                <span className={classes['info-items']}>Created by: <b>{author}</b></span>
                <span className={classes['info-items']}> | </span>
                <span className={classes['info-items']}>Created at: <b>{created_at}</b></span>
            </div>
            <hr />
        </div>
  )
}

export default SingleListItem