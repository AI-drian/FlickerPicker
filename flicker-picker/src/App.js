import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Contentfilter from "./components/ContentFilter/Contentfilter";
import CollabFilter from "./components/CollabFilter/Collabfilter";



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
              <Route exact path="/discover">
               <CollabFilter />
              </Route>
              <Route exact path="/filterbubble">
               <Contentfilter />
              </Route>
            </Switch>
          </div> 
        </>
    </Router>
    );
}

export default App;
