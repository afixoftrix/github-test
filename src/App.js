import React from "react";
import { Switch, Route } from "react-router-dom";
import { Helmet } from 'react-helmet'
import Home from "./Pages/Home";
import "./App.css";
import Search from "./Pages/Search";
import NavBar from "./containers/Navbar";

function App() {
    return (
        <div className="App">
            <Helmet>
                <title>Wreck em Tech</title>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"></link>
            </Helmet>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/search" component={Search} />
            </Switch>
        </div>
    );
}

export default App;
