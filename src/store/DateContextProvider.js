import React, { useEffect } from 'react'
import DateContext from './date-context'

const DateContextProvider = (props) => {
const [dateResults, setDateResults] = React.useState([])


useEffect(() => {
    fetch(`https://hn.algolia.com/api/v1/search_by_date?query=${props.date}`)
        .then(response => response.json())
        .then(data => setDateResults(data.hits))
})



  return (
    <DateContext.Provider>
        {props.children}
    </DateContext.Provider>
  )
}

export default DateContextProvider