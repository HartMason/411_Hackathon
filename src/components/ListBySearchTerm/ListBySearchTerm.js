import React, { useContext } from 'react'
import SearchTermContext from '../../store/search-term-context'
import SingleListItem from '../SingleListItem/SingleListItem'


const ListBySearchTerm = () => {
    const fetchSearchTermContext = useContext(SearchTermContext)


const data = fetchSearchTermContext.map(( item ) => {
    
        return  <SingleListItem
                    key={item.objectID}
                    title={item.title}
                    url={item.url}
                    points={item.points}
                    author={item.author} 
                    created_at={item.createdAt} 
                    />
            })


  return (
    <ul>{ data.length === 0 ? <h1>Loading...</h1> : data }</ul>
  )
}

export default ListBySearchTerm