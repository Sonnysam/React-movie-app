import React, { useState, useEffect } from "react";
import './App.css';
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg';

//8d1247bb

const URL = "https://www.omdbapi.com/?apikey=8d1247bb";




const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");


  const searchMovies = async (title) => {
    const response = await fetch(`${URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("batman");
  }, []);


  return ( 
  <div className="app">
      <h1>SonnyFlix</h1>
      <div className="search">
          <input 
          type="text" 
          placeholder="Search for movies" 
          value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)} 
           />
          <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)}/>
      </div>

  {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie}/>
          ))}
        </div>
      ) : (
          <div className="empty">
              <h2>No movies found</h2>
          </div>
      )}
  </div>
  );
};



export default App;
