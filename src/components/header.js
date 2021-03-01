import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
/* import { useDispatch } from "react-redux";
import { isLogin } from "../helper/authentication";
import { logOut } from "../container/Authentification/Login/action";*/

import "./css/header.css";

<i class="fab fa-github"></i>;
const HeaderPage = (props) => {
  /* LOGIN/LOGOUT
  const dispatch = useDispatch();
  const myLogOut = () => {
    console.log("in");
    dispatch(logOut());
    console.log("out");
  };*/
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <Button className='logo-link' type="link" block style={{ color: `${props.navColor}` }}>
            MOVIE INTRO
          </Button>
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/">
          <Button
            type="link"
            block
            style={{ color: `${props.navColor}`, fontSize: "1rem" }}
          >
            SEARCH
          </Button>
        </Link>

        <Link to="/popular-movie">
          <Button
            type="link"
            block
            style={{ color: `${props.navColor}`, fontSize: "1rem" }}
          >
            POPULAR MOVIES
          </Button>
        </Link>

        <Link to="/upcoming-movie">
          <Button
            type="link"
            block
            style={{ color: `${props.navColor}`, fontSize: "1rem" }}
          >
            UPCOMING
          </Button>
        </Link>

        <Link to="/favorite-movie">
          <Button
            type="link"
            block
            style={{ color: `${props.navColor}`, fontSize: "1rem" }}
          >
            YOUR FAVORITE MOVIE
          </Button>
        </Link>
      </div>

      <a
        className="github"
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-github" style={{ color: `${props.navColor}` }}></i>
      </a>

      {/* LOGIN /LOGOUT
        {isLogin() ? (
          <div className="logout">
            {" "}
            <Link to="/login">
              <Button
                type="link"
                block
                onClick={() => myLogOut()}
                style={{ color: `${props.navColor}`, fontSize: "1rem" }}
              >
                LOGOUT
              </Button>
            </Link>
          </div>
        ) : (
          <div className="login">
            {" "}
            <Link to="/login">
              <Button
                type="link"
                block
                style={{ color: `${props.navColor}`, fontSize: "1rem" }}
              >
                LOGIN
              </Button>
            </Link>
          </div>
        )} */}
    </div>
  );
};

export default React.memo(HeaderPage);
