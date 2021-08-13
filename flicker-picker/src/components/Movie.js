import React from "react";


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
        <img src = {image_API + poster_path} alt={title}/>
        <div className = "movie-synopsis">
            <h3>{title}</h3> 
            {/* <span>{release_date}</span> */}
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