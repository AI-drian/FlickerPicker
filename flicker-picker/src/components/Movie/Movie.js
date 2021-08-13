import React from "react";
import "./Movie.css"

const image_API = "http://image.tmdb.org/t/p/w500";

// The if statment is used to put the rating-scores in categories that can be insdividually styled
const setRatingClass = (vote) => {
    if (vote >= 7.5) {
        return "green";
    }
    else if(vote >= 5.5) {
        return "yellow";
    }
    else{
        return "red";
    }
};

const Movie = ({title, vote_average, overview, poster_path, release_date}) => (
    <div className ="movie">
        <img src = {poster_path ? (image_API + poster_path) : 
            "https://images.unsplash.com/photo-1497514440240-3b870f7341f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=281&q=80"} alt={title}/>
        <div className = "movie-synopsis">
            <h3>{title}</h3> 
            <span>{release_date}</span>
            <span className={
                `tag ${setRatingClass(vote_average)}`
                }>
                {vote_average}</span>
        </div>
        
        <div className="movie-banner">
            <h2>Overview:</h2>
            <p>{overview}</p>
            </div>
    </div>
);

export default Movie;