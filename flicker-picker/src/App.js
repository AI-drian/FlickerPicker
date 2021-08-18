import React, {useEffect, useState} from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";



function App() {

// "<> </>" == React fragments, are used for a component to return multiple elements.
    return( 
      <Router>
        <>   
          <header>
            <Navbar />
          </header>

          <div className ="content">
            <Switch>
              <Route path="/">
               <Home />
              </Route>
              <Route path="/about">
               <About />
              </Route>
            </Switch>
          </div> 
        </>
    </Router>
    );
}

export default App;
