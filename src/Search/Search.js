import React from 'react';

import SearchList from "./SearchList"

import './Search.css';

const Search = ({ searchValue, fetchMovieListApi, movieResults, isFetching}) => {
    return (
        <div className='search'>
            <input

                value={searchValue} 
                onChange={(e)=> fetchMovieListApi(e.target.value)} 
                type="text"
            />

            {searchValue !== "" && isFetching &&( <SearchList movieResults={movieResults}/>)}
        </div>
    )
}

export default Search;