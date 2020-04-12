import React from "react";
import NowPlaying from "./components/NowPlaying";
import SearchBox from "./components/SearchBox";
import MoviesInfo from "./components/MoviesInfo";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <SearchBox />
      <Router>
        <NowPlaying />
        <Route path="/movies/:id" component={MoviesInfo}></Route>
      </Router>
    </div>
  );
}

export default App;
