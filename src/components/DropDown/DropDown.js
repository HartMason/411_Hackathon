import React from 'react'
import classes from './DropDown.module.css'
const DropDown = ({ author, date, dateClick, authorClick  }) => {

const handleClick = (e) => {
   
    if (e.target.value === author) {authorClick()}
    if( e.target.value === date) {dateClick()}
}

  return (
      <div className={classes.search}>
         <label className={classes.label} htmlFor="search">SearchBy:</label>
        <select id="search" name="search" onChange={(e) => handleClick(e)}>
           
            <option value={date} >Date</option>
            <option value={author}>Author</option>
        </select>
    </div>
  )
}

export default DropDown