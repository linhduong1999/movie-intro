import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Landing from "./components/landing";
import Gallery from "./components/gallery";
import Overview from "./components/overview.jsx";
import { requestMovieDetail } from "./action";
import "./movie-detail.css"

const MovieDetail = () => {
    
  let { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestMovieDetail(id));
  }, [id, dispatch]);


  return (
    <>
    <Landing/>
    <Overview/>
    <Gallery/>
    </>
  );
};

export default React.memo(MovieDetail);
