import React, { useState, useEffect } from "react";
import { Input, Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getLoadingSelector, totalResultSelector } from "./reselect";
import { searchMovie } from "./action";
import HeaderPage from "../../components/header";
import SearchResult from "./components/searchResult";
import { isEmpty } from "../../helper/common";
import searchBackground from "../../images/search-two.jpg";
import { Container, Row } from "react-bootstrap";
import "./search.css";
import "../../components/css/page.css";
const { Search } = Input;

const SearchPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState();
  // selector
  const { loading, results } = useSelector(
    createStructuredSelector({
      loading: getLoadingSelector,
      results: totalResultSelector,
    })
  );
  console.log("results:", results);

  // dispatching action
  const dispatch = useDispatch();
  const handleSearch = (value) => {
    setSearchTerm(value);
    dispatch(searchMovie(value, currentPage));
  };

  useEffect(() => {
    dispatch(searchMovie(searchTerm, currentPage));
    window.scrollTo(0, 0);
  }, [searchTerm, currentPage, dispatch]);

  // styling
  const moveSearchContainer = loading !== null ? "move-search-container" : null;

  const hideSearchTitle =
    loading !== null
      ? {
          display: "none",
        }
      : null;

  return (
    <>
      <div
        className="landing"
        style={{ backgroundImage: `url("${searchBackground}")` }}
      >
        <HeaderPage navColor="black" />
        <div className={"search-container " + moveSearchContainer}>
          <h1 style={hideSearchTitle}>Search a movie</h1>
          <div className="search">
            <Search
              placeholder="Search a movie..."
              onSearch={(value) => handleSearch(value)}
              size="large"
              enterButton
            />
          </div>
        </div>
        {loading !== null ? (
          <Container fluid="sm" className="result-container">
            <Row className="my-row" noGutters={false}>
              <SearchResult searchTerm={searchTerm}/>
            </Row>
            {isEmpty(results) !== null ? (
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
        ) : null}
      </div>
    </>
  );
};

export default React.memo(SearchPage);
