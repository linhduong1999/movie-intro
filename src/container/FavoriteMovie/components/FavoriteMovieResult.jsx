import React from "react";
import { createStructuredSelector } from "reselect";
import { useSelector } from "react-redux";
import { favoriteMovieSelector } from "../reselect";
import CardMovie from "../../../components/cardMovie";
const FavoriteMovieResult = () => {
  const { list } = useSelector(
    createStructuredSelector({
      list: favoriteMovieSelector,
    })
  );
  if (list.length > 0) {
    return (
      <>
        {list.map((item, idx) => (
          <CardMovie
            item={item}
            key={idx}
            inFavoriteMovie={true}
            inUpcomingMovie={false}
          />
        ))}
      </>
    );
  } else {
    return (
      <div className="no-favorite">
        <i class="fab fa-gratipay favorite-icon"></i>
        <p>No favorite yet</p>
      </div>
    );
  }
};

export default React.memo(FavoriteMovieResult);
