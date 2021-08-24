import React, {Component} from "react";
import "./Searchbar.css"

class Searchbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            movieTitle: null
        }

    }
    //Figure out how to get "data" to python, sanic and run it through recommenderengine. then return it
    handleSubmit = (e)=> {
        e.preventDefault()
        e.target.reset();
        const data = this.state
        console.log("The full input is: ", data) //test
    }

    handleChange = (e)=> {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    //Just for the looks
    render(){
    const {movieTitle} = this.state

    return ( 
        <>
        <form onSubmit={this.handleSubmit}>
         <div>
            <h2 className="page-title">Recommend me movies like: {movieTitle}</h2>
            <input  className="search-bar" type="text" placeholder="Enter movie title..." name="movieTitle" onChange={this.handleChange}></input>
         </div>
        
        </form>
        </>
    )
    }
};

 
export default Searchbar;