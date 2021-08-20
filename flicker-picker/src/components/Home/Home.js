import React, {useEffect, useState} from "react";
import Movie from "../Movie/Movie"

// For the future, try and hide the API key...
const API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=963a336b03a442a36f37bffcce32b2be&page=1";
const search_API = "https://api.themoviedb.org/3/search/movie?&api_key=963a336b03a442a36f37bffcce32b2be&query=";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [ movies, setMovies ] = useState([]);
  
    //Getting the data from API
    useEffect(() => {
      fetch(API).then(res => res.json())     
      .then(movieData => {
        console.log(movieData)  //Test
        setMovies(movieData.results);
      });
    }, []);
  
    const handleOnSubmit = (e) => {
      e.preventDefault()
  
      fetch(search_API + searchQuery)
      .then(res => res.json())     
      .then(movieData => {
        setMovies(movieData.results);
      });
    }; 
  
    const handleOnChange = (e) => {
      setSearchQuery(e.target.value);
    }

    return(
        <>
        <div className ="search-bar">
            <form onSubmit={handleOnSubmit}>
            <input className="search-bar" type="text"  placeholder="Enter movie title..." value={searchQuery} onChange={handleOnChange}></input>  
            </form>
          </div>

          <div className="movie-container">
            {movies.length > 0 && movies.map(movie =>   //Error "Movies is not a function" solved by returning a list > 0 &&...
            (<Movie key={movie.id} {...movie} />  //Using id as key to get data from the movie, ... is called the Spread Syntax in JS
          ))}
        </div>
        </>
    );
}
export default Home;