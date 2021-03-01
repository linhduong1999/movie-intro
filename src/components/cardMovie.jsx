import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import slugify from "react-slugify";
import { favoriteMovieSelector } from "../container/FavoriteMovie/reselect";
import {
  favoriteMovieAdded,
  favoriteMovieDeleted,
} from "../container/FavoriteMovie/action";
import { Image } from "react-bootstrap";
import "./css/card-movie.css";

const CardMovie = ({ item, inFavoriteMovie, inUpcomingMovie }) => {
  const { favoriteList } = useSelector(
    createStructuredSelector({
      favoriteList: favoriteMovieSelector,
    })
  );

  const [showFavorite, setShowFavorite] = useState(false);
  const alreadyExisted = favoriteList.find(element => element.id === item.id);
  const [routeToFavorite, setRouteToFavorite] = useState(alreadyExisted);
  const dispatch = useDispatch();

  const addToFavorite = () => {
    setRouteToFavorite(true);
    dispatch(favoriteMovieAdded(item));
  };

  const deleteFavoriteMovie = () => {
    dispatch(favoriteMovieDeleted(item.id));
  };

  const handleFavoriteMovieEvent = () => {
    if (!inFavoriteMovie) {
      if (!routeToFavorite) {
        return (
          <div
            onClick={() => addToFavorite()}
            onMouseEnter={() => setShowFavorite(true)}
            className="favorite"
          >
            Add to Favorite
          </div>
        );
      } else {
        return (
          <Link to="/favorite-movie">
            <div
              className="route-to-favorite"
              onMouseEnter={() => setShowFavorite(true)}
            >
              View Favorite
            </div>
          </Link>
        );
      }
    } else {
      return (
        <div
          onClick={() => deleteFavoriteMovie()}
          onMouseEnter={() => setShowFavorite(true)}
          className="favorite"
        >
          Delete Favorite
        </div>
      );
    }
  };

  return (
    <>
      <div className="card">
        <Link to={`movie-detail/${slugify(item.title)}/${item.id}`}>
          <article className="img-container">
            <div
              className="poster"
              onMouseEnter={() => setShowFavorite(true)}
              onMouseLeave={() => setShowFavorite(false)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
              />
              {inUpcomingMovie ? (
                <p className="release-date">{item.release_date}</p>
              ) : null}
            </div>
            <h4>{item.original_title}</h4>
          </article>
        </Link>
        {showFavorite ? handleFavoriteMovieEvent() : null}
      </div>
    </>
  );
};

export default React.memo(CardMovie);
