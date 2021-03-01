import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  titleSelector,
  backdropSelector,
  videoSelector,
  individualBackdropSelector,
  individualPosterSelector,
} from "../reselect";
import HeaderPage from "../../../components/header";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { isEmpty } from "../../../helper/common";

import ".././movie-detail.css";

const Landing = () => {
  const [play, setPlay] = useState(false);
  const {
    title,
    backdrops,
    video,
    individualBackdrop,
    individualPoster,
  } = useSelector(
    createStructuredSelector({
      title: titleSelector,
      backdrops: backdropSelector,
      video: videoSelector,
      individualBackdrop: individualBackdropSelector,
      individualPoster: individualPosterSelector,
    })
  );

  const exitVideo = () => {
    setPlay(false);
  };

  return (
    <>
      {/* <!-- Title And Video --> */}
      <div
        className="landing-movie-detail"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
         url("https://image.tmdb.org/t/p/w300/${
           !isEmpty(backdrops) && backdrops.length > 0
             ? backdrops[backdrops.length - 1].file_path
             : individualBackdrop !== null
             ? individualBackdrop
             : individualPoster
         }")`,
        }}
      >
        {/* <!-- Nav Bar --> */}
        <div className="landing-double-layer"></div>
        <div className="landing-triple-layer">
          <HeaderPage navColor="white" />
          <div className="title">
            <h1>{title}</h1>
            <div onClick={() => setPlay(true)}>

              <i className="fas fa-play play-icon"></i>
            </div>

            {play ? (
              <div className="trailer-background" onClick={() => exitVideo()}>
                <div className="box">
                  <iframe
                  title={title}
                    width="960"
                    height="540"
                    src={`https://www.youtube.com/embed/${video}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Landing);
