import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import MoviesInfo from "./components/MoviesInfo";
import NowPlaying from "./components/NowPlaying";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <div>
      <SearchBox />
      <Router>
        <Route path="/" exact component={NowPlaying} />
        <Route path="/movies/:id" component={MoviesInfo}></Route>
      </Router>
    </div>
  );
}

export default App;
