import React, { useContext } from 'react'
import AuthorContext from '../../store/author-context'
import SingleListItem from '../SingleListItem/SingleListItem'

const ListByAuthor = () => {

    const fetchAuthorContext = useContext(AuthorContext)
    // TODO: HART has to map over the fetched results of the fetchAuthorResults variable  and return a SingleListItem component
    // TODO: The necessary props need to be passed into the SingleListItem component that is being mapped
    // TODO save that into a variable and display it



  return (
    {data}
  )
}

export default ListByAuthor