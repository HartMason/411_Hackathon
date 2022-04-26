import React from 'react'
import classes from './Button.module.css'

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={classes.pushable}><span className={classes.front}>Search by { props.searchBy }</span></button>
  )
}

export default Button