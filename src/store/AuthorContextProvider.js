import React from 'react'
import AuthorContext from './author-context'


const AuthorContextProvider = (props) => {
    const [authorResults, setAuthorResults] = React.useState([])


    React.useEffect(() => {
        fetch(`http://hn.algolia.com/api/v1/search?tags=story,author_${props.author}`)
            .then(response => response.json())
            .then(data => setAuthorResults(data.hits))
    }, [])




    return (
        <AuthorContext.Provider value={authorResults}>
            {props.children}
        </AuthorContext.Provider>
    )
}

export default AuthorContextProvider