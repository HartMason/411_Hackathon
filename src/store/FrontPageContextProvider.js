import React from 'react'
import FrontPageContext from './front-page-context'


const FrontPageContextProvider = (props) => {
    const [results, setResults] = React.useState([])


    React.useEffect(() => {
        fetch('https://hn.algolia.com/api/v1/search?tags=front_page')
            .then(response => response.json())
            .then(data => setResults(data.hits))
    }, [])




    return (
        <FrontPageContext.Provider value={results}>
            {props.children}
        </FrontPageContext.Provider>
    )
}

export default FrontPageContextProvider