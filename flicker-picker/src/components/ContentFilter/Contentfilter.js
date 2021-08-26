import React, {Component} from "react";


const API_contentfilter = "/filterbubble";

class ContentFilter extends Component {
    constructor(props){
        super(props)
        this.state = {
            movieTitle: null
        }
    }

    handleSubmit = (e)=> {
        e.preventDefault()
        e.target.reset();
        const searchQuery = this.state.movieTitle
        console.log("The full input is: ", searchQuery) //test

        fetch(API_contentfilter)
        .then(res => res.json())     
        .then(recommendations => {
            console.log(recommendations); 
        });
    }

    //Just for the looks
    render(){
        const {movieTitle} = this.state
  
      return ( 
          <>
          <form onSubmit={this.handleSubmit}>
           <div>
              <h2 className="page-title">Filter bubble search: {movieTitle}</h2>
              <input  className="search-bar" type="text" placeholder="Enter movie title..." name="movieTitle"></input>
           </div>
          
          </form>
          </>
      )
      }
  };
  
   
  export default ContentFilter;