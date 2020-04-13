import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SearchBox/SearchBox.css";

function SearchBox() {
  const [query, setQuery] = useState();
  const [data, setData] = useState([]);
  const [res, setRes] = useState();

  function showData(e) {
    setQuery(e.target.value);
  }

  useEffect(() => {
    if (query !== undefined) {
      getSearchedMovieData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  async function getSearchedMovieData() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`
      );
      const receivedData = await response.json();
      setRes(receivedData.total_results);
      setData(receivedData.results.splice(0, 5));
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="searchContainer">
      <div>
        <form>
          <input
            type="text"
            onChange={showData}
            placeholder="Enter Movie Name"
          />
        </form>
      </div>

      <div className="searchDropDownContainer">
        {data !== undefined && res > 0 ? (
          data.map((item) => (
            <div key={item.id} className="searchDropDown">
              <Link to={`/movies/${item.id}`}>
                <div className="searchInfo">
                  <h3> {item.title}</h3>
                  <p>{item.release_date} </p>
                </div>
              </Link>
            </div>
          ))
        ) : res === 0 ? (
          <h3>Movie Not found.Please Try Again</h3>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default SearchBox;
