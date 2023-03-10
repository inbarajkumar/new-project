
import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import SearchIcon from "./search.svg";
import MovieCard from './MovieCard';
const API_URL = 'http://www.omdbapi.com?apiKey=e5995ce4';


const App = () => {

  const [Movies, setMovie] = useState([]);

   const [searchTerm , setsearchmovie] = useState([]);
  const searchMovie = async (title) => {
    const reponse = await fetch(`${API_URL}&s=${title}`);
    const data = await reponse.json();
    setMovie(data.Search)
  }

  useEffect(() => {
    searchMovie('spiderman');
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input placeholder="search for movie"
          value={searchTerm}
          onChange={(e) => setsearchmovie(e.target.value) }
        />
        <img src={SearchIcon}
          alt="search"
          onClick={() => searchMovie(searchTerm)}>
        </img>
      </div>

      {
        Movies?.length > 0
          ? (
            <div className="container">
              {Movies.map((Movies) => (
                <MovieCard Movies={Movies} />
              ))}
            </div>
          ) : (
            <div className='"empty'>
              <h2> No Movies found</h2>
            </div>
          )
      }

    </div>
  );
}

export default App;
