import React, { useEffect } from "react";

function MoviesInfo({ match }) {
  console.log(match);

  useEffect(() => {
    movieInfo();
  }, []);

  async function movieInfo() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      const resData = await res.json();
      console.log(resData.title);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <h1>MoviesInfo</h1>
    </div>
  );
}

export default MoviesInfo;
