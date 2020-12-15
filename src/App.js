import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from 'react'
import Movie from './Movie/Movie';
import './App.css';
import Search  from './Search/Search'





//==================================================================================================================//
//==================================================================================================================//


function AppNav() {
  const [searchValue, setSearchValue]=useState("")
  const [movieResults, setMovieResults]=useState([])
  const [isFetching, setIsFetching]=useState([])


  async function fetchMovieListApi(inputValue){
    setSearchValue(inputValue)
    const MOVIE_API_KEY = process.env.REACT_APP_MOVIE_ODB_API;
    

    try{
  
  const response = await fetch(`http://omdbapi.com/?apikey=${MOVIE_API_KEY}&s=${inputValue}`)
  
  const data = await response.json();

  if(!data.Error){
    setIsFetching(true);
    setMovieResults(data.Search)
  }
  
  // setMovieResults(data.Search || []);

  
}
catch(e){}

}
  return (
    <div className="App">
      <Search 
        searchValue={searchValue}  
        fetchMovieListApi={fetchMovieListApi} 
        movieResults={movieResults} 
        isFetching={isFetching}
      />
    </div>
  );
}





function App(){
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AppNav} />
        <Route exact path="/:movieTitle" component={Movie} />
        <Route render={()=><h1>Not Found</h1>} />
      </Switch>
    </Router>
  )
}
export default App;
