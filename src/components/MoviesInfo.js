import React, { useEffect, useState } from "react";
import "../styles/MoviesInfo/MoviesInfo.css";

function MoviesInfo({ match }) {
  const [resData, setResData] = useState({});

  useEffect(() => {
    movieInfo();
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

  return (
    <div className="movieContainer">
      <a href="/Movies-App-React/#/">
        <button> &#8592; Go Back</button>
      </a>
      <div className="movieContent">
        <h1>{resData.title} </h1>
        <p>Release Date : {resData.release_date}</p>
        <img
          src={`https://image.tmdb.org/t/p/w500${resData.poster_path}`}
          alt="pic"
        />
        <p>{resData.overview} </p>
      </div>
    </div>
  );
}

export default MoviesInfo;
