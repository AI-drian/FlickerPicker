import React, {Component} from "react";
import "./Collabfilter.css"


const API_collabfilter = "/discover/";

class CollabFilter extends Component {
    constructor(props){
        super(props)
        this.state = {
            movieTitle: ""
        }
    }

    handleSubmit = (e)=> {
        e.preventDefault()
        e.target.reset();
        const searchQuery = this.state.movieTitle
        console.log("The full input is: ", searchQuery) //test

        fetch(API_collabfilter + searchQuery)
        .then(res => res.json())     
        .then(recommendations => {
            console.log(recommendations); 
        });
    }

    handleOnChange = (e) => {
        this.setState({movieTitle : e.target.value});
      }

    //Just for the looks
    render(){
        const {movieTitle} = this.state

      return ( 
          <>
          <form onSubmit={this.handleSubmit}>
           <div>
              <h2 className="page-title">Find similar movies to: </h2>
              <input  className="search-bar" type="text" placeholder="Enter movie title..." name="movieTitle" value={movieTitle} onChange={this.handleOnChange}></input>
           </div>
          
          </form>
          </>
      )
      }
  };
  
   
  export default CollabFilter;