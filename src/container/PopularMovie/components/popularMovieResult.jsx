import React from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import CardMovie from "../../../components/cardMovie";
import { resultSelector } from "../reselect";
import Load from "../../../components/loading";

function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}

const PopularMovieResult = () => {
  const { list } = useSelector(
    createStructuredSelector({
      list: resultSelector,
    })
  );

  if (!isEmpty(list)) {
    return (
      <>
        {list.results.map((item, idx) => (
          <CardMovie
            item={item}
            key={idx}
            inFavoriteMovie={false}
            inUpcomingMovie={false}
          />
        ))}
      </>
    );
  } else {
    return <Load />;
  }
};

export default React.memo(PopularMovieResult);
