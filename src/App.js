import React from "react";
import './App.css';
import { BrowserRouter  as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/pages/Home';
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";
import SignUp from "./components/pages/SIgnUp";

function App() {
  return (
    <>
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact components={Home} />
                <Route path='/about' component={About} />
                <Route path='/skills' component={Skills} />
                <Route path='/projects' component={Projects} />
                <Route path='/sign-up' component={SignUp} />
            </Switch>
        </Router>

    </>
  );
}

export default App;
