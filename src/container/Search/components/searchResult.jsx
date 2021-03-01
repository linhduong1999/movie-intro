import React from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { allSelector } from "../reselect";
import Loading from "../../../components/loading";
import CardMovie from "../../../components/cardMovie";
import { isEmpty } from "../../../helper/common";

function SearchResult(props) {
  const { list } = useSelector(
    createStructuredSelector({
      list: allSelector,
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
              inUpcomingMovie={false}
            />
          ))}
        </>
      );
    } else {
      return <p className="no-search-result">Your search, <strong><em>{props.searchTerm}</em></strong>, did not match any documents.</p>;
    }
  } else {
    return <Loading />;
  }
}

export default React.memo(SearchResult);
