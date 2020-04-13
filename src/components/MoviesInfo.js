import React, { useEffect, useState } from "react";
import "../styles/MoviesInfo/MoviesInfo.css";
import { Link } from "react-router-dom";

function MoviesInfo({ match }) {
  const [resData, setResData] = useState({});
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    movieInfo();
    getMovieCredits();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params.id]);

  async function movieInfo() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      const data = await res.json();
      setResData(data);
    } catch (e) {
      console.log(e);
    }
  }

  async function getMovieCredits() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${match.params.id}/credits?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await res.json();
    setCredits(data.cast);
  }

  return (
    <>
      <Link to="/">
        <button> &#8592; Go Back</button>
      </Link>
      <div className="movieContainer">
        <div className="movieContent">
          <h1>{resData.title} </h1>
          <p>Release Date : {resData.release_date}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${resData.poster_path}`}
            alt="pic"
          />
          <p>{resData.overview} </p>
        </div>
        <div className="creditsContainer">
          <h1>Cast</h1>
          {credits.map((item) =>
            item.character ? (
              <li key={item.id}>
                {item.name} <span>as</span> {item.character}{" "}
              </li>
            ) : (
              <></>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default MoviesInfo;
