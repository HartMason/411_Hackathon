import React, { useEffect, useState } from 'react'
import SearchTermContext from './search-term-context'


const SearchTermContextProvider = (props) => {
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        fetch(`https://hn.algolia.com/api/v1/search?query=${props.searchTerm}&tags=story`)
            .then(response => response.json())
            .then(data => setSearchResults(data.hits))
    }, [props.searchTerm])


    return (
        <SearchTermContext.Provider value={searchResults}>
            {props.children}
        </SearchTermContext.Provider>
    )
}

export default SearchTermContextProvider