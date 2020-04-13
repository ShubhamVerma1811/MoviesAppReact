import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NowPlaying/NowPlaying.css";
import SearchBox from "./SearchBox";

function NowPlaying() {
  const [nowPlaying, setNowPlaying] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => setNowPlaying([...nowPlaying, data.results]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (nowPlaying.length > 0) {
    return (
      <>
        <SearchBox />

        <div className="nowPlaying">
          <center>
            <h1>Now Playing</h1>
          </center>
          <div className="nowContainer">
            {nowPlaying[0].map((item) => (
              <Link key={item.id} to={`/movies/${item.id}`}>
                <div className="nowCard">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt="pic"
                  />
                  <h2>{item.title} </h2>
                  <p> Release Date : {item.release_date} </p>
                  <p>{item.overview.substring(0, 100)}...</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return <h1>Loading..</h1>;
  }
}

export default NowPlaying;
