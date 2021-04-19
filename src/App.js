import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/post/:slug">
          <SinglePost />
        </Route>
        <Route exact path="/post">
          <Post />
        </Route>
        <Route exact path="/project">
          <Project />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
