import React from 'react'
import classes from './SingleListItem.module.css'

const SingleListItem = ({ url, title, points, author, created_at}) => {
    const [notInterested, setNotInterested] = React.useState(false)
  return (
            <div className={classes.hovers}>
            <li className={!notInterested ? classes.title : classes['no-interest']} >
                {title || 'Title not found'}
            </li>
            <a className={!notInterested ? classes.link : classes['no-interest']} href={url || '#'}>
                {url || 'ClickMe.com'}
            </a>
            <div className={classes.info} >
                <span className={!notInterested ? classes['info-items'] : classes['no-interest']}>Points: <b>{points || 0 }</b></span>
                <span className={!notInterested ? classes['info-items'] : classes['no-interest']}> | </span>
                <span className={!notInterested ? classes['info-items'] : classes['no-interest']}>Created by: <b>{author || 'No Author Listed'}</b></span>
                <span className={!notInterested ? classes['info-items'] : classes['no-interest']}> | </span>
                <span className={!notInterested ? classes['info-items'] : classes['no-interest']}>Created at: <b>{created_at || "No creation time listed"}</b></span>
                
            </div>
            <button className={classes.button} onClick={() => setNotInterested(prev => !prev)}>Not Interested</button>
            <hr />
        </div>
  )
}

export default SingleListItem