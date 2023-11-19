import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

function App() {
  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=c31dcf671054422179d0d18e3c5524ed";
  const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=c31dcf671054422179d0d18e3c5524ed&query=";
  const [movies, setMovies] = useState([])
  const [term, setTerm] = useState('')

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setMovies(data.results));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault()

    fetch(API_SEARCH + term)
      .then (res => res.json())
      .then (data => setMovies(data.results))

}

  return (
    <div className="App">
      <div className="search_nav">
        <div className="title">
          <h1> Movies </h1>
        </div>
        <div className="searchbox">
          <form onSubmit={handleSearch}>
            <input onChange={(e)=>setTerm(e.target.value) }/>
            <button>search</button>
          </form>
        </div>
      </div>
      <div className="movies">
        {movies.map((movie) => 
        <MovieCard {...movie} />
        )}
      </div>
    </div>
  );
}

export default App;
