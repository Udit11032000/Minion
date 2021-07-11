import React from "react";
import './App.css';
import Nav from "./Nav";
import About from "./About";
import Home from "./Home";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
      </Switch>
     
    </div>
    </Router>
    
  );
}


export default App;
