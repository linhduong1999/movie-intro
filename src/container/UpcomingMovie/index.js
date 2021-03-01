import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { DatePicker, Space, Pagination } from "antd";
import { Container, Row } from "react-bootstrap";
import { createStructuredSelector } from "reselect";
import { totalResultSelector, getLoadingSelector } from "./reselect";
import { requestUpcomingMovie } from "./action";
import HeaderPage from "../../components/header";
import UpcomingMovieResult from "./components/UpcomingMovieResult";
import { isEmpty } from "../../helper/common";
import upcomingBackground from "../../images/upcoming-three.jpg";
import "./upcoming.css";
import "../../components/css/page.css";

const UpcomingMovie = () => {
  // state
  const [endDate, setEndDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // selector
  const { results, loading } = useSelector(
    createStructuredSelector({
      results: totalResultSelector,
      loading: getLoadingSelector,
    })
  );

  // dispatch
  const dispatch = useDispatch();
  const onChange = (date, dateString) => {
    setEndDate(dateString);
    dispatch(requestUpcomingMovie(dateString, currentPage));
  };

  useEffect(() => {
    dispatch(requestUpcomingMovie(endDate, currentPage));
    window.scrollTo(0, 0);
  }, [endDate, currentPage, dispatch]);

  // disable date before begin date
  const disabledDate = (current) => {
    return current && current < moment().endOf("day");
  };

  const movingUpcomingContainer =
    loading !== null ? "move-upcoming-container" : null;
  const movingUpcomingTitle = loading !== null ? "moving-upcoming-title" : null;
  const movingDatePicker = loading !== null ? "moving-upcoming-title" : null;

  return (
    <>
      <div
        className="landing"
        style={{ backgroundImage: `url("${upcomingBackground}")` }}
      >
        <HeaderPage navColor="black" />
        <div className={"og-upcoming " + movingUpcomingContainer}>
          <h1 className={"upcoming-title " + movingUpcomingTitle}>
            Upcoming Movie
          </h1>
          <div className={"date-picker " + movingDatePicker}>
            <Space direction="vertical">
              <DatePicker
                onChange={onChange}
                disabledDate={disabledDate}
                size="large"
                style={
                  loading !== null ? { width: "50rem" } : { width: "30rem" }
                }
              />
            </Space>
          </div>
        </div>
        <Container fluid="sm result-container">
          <Row className="my-row" noGutters={false}>
            <UpcomingMovieResult />
          </Row>
          {isEmpty(results) !== null && results >0 ? (
            <Row className="my-row pagination">
              <Pagination
                pageSize={20}
                showSizeChanger={false}
                total={results}
                current={currentPage}
                onChange={(page) => setCurrentPage(page)}
              />
            </Row>
          ) : null}
        </Container>
      </div>
    </>
  );
};

export default React.memo(UpcomingMovie);
