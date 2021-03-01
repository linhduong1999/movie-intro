import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Pagination } from "antd";
import { Container, Row } from "react-bootstrap";
import { createStructuredSelector } from "reselect";
import { useSelector } from "react-redux";
import { totalResults } from "./reselect";
import { requestPopularMovie } from "./action";
import PopularMovieResult from "./components/popularMovieResult";
import HeaderPage from "../../components/header";
import popuplarBackground from "../../images/popular-one.jpg";
import "./popular.css";
import "../../components/css/page.css"

const PopularMovie = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const { results } = useSelector(
    createStructuredSelector({
      results: totalResults,
    })
  );

  useEffect(() => {
    dispatch(requestPopularMovie(currentPage));
    window.scrollTo(0, 0);
  }, [currentPage, dispatch]);

  return (
    <>

        <div
          className="landing og-popular"
          style={{ backgroundImage: `url("${popuplarBackground}")` }}
        >
          <HeaderPage navColor="black" />
          <h1>Popular Movie</h1>
          <Container fluid="sm result-container">
            <Row className="my-row" noGutters={false}>
              <PopularMovieResult />
            </Row>
            <Row className="my-row pagination" noGutters={false}>
              <Pagination
                pageSize={20}
                showSizeChanger={false}
                total={results}
                current={currentPage}
                onChange={(page) => setCurrentPage(page)}
              />
            </Row>
          </Container>
        </div>
 
    </>
  );
};

export default React.memo(PopularMovie);
