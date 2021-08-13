import React, {useEffect, useState} from "react";

import Movie from "./components/Movie";

// For future security, try and hide the API key...
const API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=963a336b03a442a36f37bffcce32b2be&page=1";
const image_API = "http://image.tmdb.org/t/p/w500";
const search_API = "https://api.themoviedb.org/3/search/movie?&api_key=963a336b03a442a36f37bffcce32b2be&query=";


// This is the important part :)
function App() {
  const [ movies, setMovies ] = useState([]);

  useEffect(() => {
    fetch(API).then(res => res.json())     
    .then(movieData => {
      console.log(movieData)  //Test
      setMovies(movieData.results);
    });
  }, []);

    return  <div>
      {movies.length > 0 && movies.map(movie =>   //Error "Movies is not a function" solved by returning a list > 0 &&...
        (<Movie />
        ))}
    </div>;
}

export default App;
