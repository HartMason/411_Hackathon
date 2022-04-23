import React, { useContext } from 'react'
import FrontPageContext from '../../store/front-page-context'
import SingleListItem from '../SingleListItem/SingleListItem'


const InitialList = () => {

    const FetchFrontPageContext = useContext(FrontPageContext)

    const data = FetchFrontPageContext.map((item)=> {


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
    <ul>
        { data.length === 0 ? <h1>Loading Results...</h1> : data }
    </ul>
  )
}

export default InitialList