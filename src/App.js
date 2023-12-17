import { useEffect, useState } from 'react';
import './App.css';
import searchIcon from "./search.svg"
import MovieCart from './components/MovieCart';

function App() {
  
  const [movies, setMovies] = useState([]) 
  const [searchTerms, setSearchTerms] = useState("") 
  const api = "https://www.omdbapi.com?apikey=e91033c4"

  // this function will handle our api call
  const searchMovie = async (movieName) => {
    const res = await  fetch(`${api}&s=${movieName}`)
    const data = await res.json()
    setMovies(data.Search)
   
  }
  
  // this effect will run when the page is loaded
  useEffect(() => {
    searchMovie(searchTerms)
  } , [])
  console.log(movies);

  return (
    <div className="app">
      <h1>mojiLand</h1>
      <div className='search'>
        <input
        placeholder='search for movies...'
        value={searchTerms}
        onChange={(e) => {
          setSearchTerms(e.target.value)
        }}
        />
        <img src={searchIcon} onClick={() => {
          searchMovie(searchTerms)
        }}/>
      </div>
      <div className="container">
        {
         movies?.length > 0 ?
         (
          movies?.map((movie, i) => {
            return <MovieCart video={movie} key={i} />
          })
         ):(
          <div className='empty'>
           <h2> no movies found!</h2>
          </div>
         )
        }
      </div>
    </div>
  );
}

export default App;
