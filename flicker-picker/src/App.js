import React, {useEffect, useState} from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import Recommender from "./components/Recommender/Recommender";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";



function App() {
// "<> </>" == React fragments, are used for a component to return multiple elements.
// Funny thing, React router automatically assumes the first path "/" is the correct one bcus it matches with anything. therefore "exact path="

    return( 
      <Router>
        <>   
          <header>
            <Navbar />
          </header>

          <div className ="content">
            <Switch>
              <Route exact path="/">
               <Home />
              </Route>
              <Route exact path="/about">
               <About />
              </Route>
              <Route exact path="/recommender">
               <Recommender />
              </Route>
            </Switch>
          </div> 
        </>
    </Router>
    );
}

export default App;
