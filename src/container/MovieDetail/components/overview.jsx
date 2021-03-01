import React from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { overviewSelector } from "../reselect";
import ".././movie-detail.css";

const Overview = () => {
  // All info need is int overview
  const { list } = useSelector(
    createStructuredSelector({
      list: overviewSelector,
    })
  );
  // list.images.backdrops[backdrops.length].file_path
  return (
    <>
      {/* <!-- ABOUT --> */}
      <div
        className="about"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
       url("https://image.tmdb.org/t/p/w300/${
         list.backdrop_path !== null ? list.backdrop_path : list.poster_path
       }")`,
        }}
      ></div>
      <div className="about-second-layer">
        <ul className="genres">
          {list.genres
            ? list.genres.map((genre, idx) => (
                <li key={genre.id}>
                  {idx !== list.genres.length - 1
                    ? genre.name + "/"
                    : genre.name}
                </li>
              ))
            : null}
        </ul>
        <h1>OVERVIEW</h1>
        <p className="overview">{list.overview}</p>
        <ul className="detail">
          <li>
            <p>STATUS:</p>
            <p> {list.status}</p>
          </li>
          <li>
            <p>RELEASE DATE:</p>
            <p> {list.release_date}</p>
          </li>
          <li>
            <p>POPULARITY:</p>
            <p>{list.popularity}</p>
          </li>
          <li>
            <p>VOTE COUNT:</p>
            <p>{list.vote_count}</p>
          </li>
          <li>
            <p>VOTE AVERAGE:</p>
            <p> {list.vote_average}</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default React.memo(Overview);
