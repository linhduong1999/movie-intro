import React from "react";
import { createStructuredSelector } from "reselect";
import { useSelector } from "react-redux";
import { resultSelector } from "../reselect";
import { isEmpty } from "../../../helper/common";
import CardMovie from "../../../components/cardMovie";

const UpcomingMovieResult = () => {
  const { list } = useSelector(
    createStructuredSelector({
      list: resultSelector,
    })
  );

  if (!isEmpty(list)) {
    if (list.results.length > 0) {
      return (
        <>
          {list.results.map((item, idx) => (
            <CardMovie
              item={item}
              key={idx}
              inFavoriteMovie={false}
              release_date={item.release_date}
              inUpcomingMovie={true}
            />
          ))}
        </>
      );
    } else {
      return <h2>There is no upcoming movie for the selected date.</h2>;
    }
  } else {
    return <></>;
  }
};
export default React.memo(UpcomingMovieResult);
