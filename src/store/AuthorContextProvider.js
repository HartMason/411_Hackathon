import React from 'react'
import AuthorContext from './author-context'


const AuthorContextProvider = (props) => {
    const [authorResults, setAuthorResults] = React.useState([])


    React.useEffect(() => {
        console.log('author fetch')
        fetch(`https://hn.algolia.com/api/v1/search?tags=story,author_${props.author}`)
            .then(response => response.json())
            .then(data => setAuthorResults(data.hits))
    }, [props.author])
    




    return (
        <AuthorContext.Provider value={authorResults}>
            {props.children}
        </AuthorContext.Provider>
    )
}

export default AuthorContextProvider