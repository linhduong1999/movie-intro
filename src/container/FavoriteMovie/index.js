import React from "react";
import FavoriteMovieResult from "./components/FavoriteMovieResult";
import HeaderPage from "../../components/header";
import { Container, Row } from "react-bootstrap";
import popuplarBackground from "../../images/favorite-two.jpg";
import "./favorite.css";
import "../../components/css/page.css"

const FavoriteMovie = () => {
  return (
    <>
      <div className="landing"
       style={{ backgroundImage: `url("${popuplarBackground}")` }}>
        <HeaderPage navColor="black" />
        <div className="favorite-container">
          <h1>Favorite Movie </h1>
        </div>
        <Container fluid="sm result-container">
          <Row className="my-row pagination" noGutters={false}>
            <FavoriteMovieResult />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default React.memo(FavoriteMovie);
