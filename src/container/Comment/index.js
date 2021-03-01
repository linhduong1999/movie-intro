/*

import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { Input, Button } from "antd";
import { isLogin, getUserID } from "../../helper/authentication";
import AlertLogin from "../../components/alert";
import CommentResult from './components/commentResult'
import { submitComment } from './action';


const { TextArea } = Input;

const Comment = () => {
  const userID = getUserID();

  const [disable, setDisable] = useState(true);
  const [showLogin, setShowLogin] = useState(null);
  const [content, setContent] = useState("")

  const dispatch = useDispatch();

  const checkLogin = () => {
    console.log("islogin", isLogin())
    if (isLogin()) {
      setShowLogin(false);
      setDisable(false);
    } else {
      setDisable(true);
      setShowLogin(true);
    }
  };

  const submitComment = () => {
    dispatch(submitComment(content, userID))
  }

  return (
    <>
      <h1>Comment</h1>
      <TextArea
        rows={4}
        onFocus={() => checkLogin()}
        onBlur={() => setShowLogin(null)}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button type="primary" disabled={disable}
      onClick={submitComment}>
        Submit
      </Button>
      <Button type="ghost">Cancel</Button>
      {showLogin ? <AlertLogin /> : null}
      <CommentResult/>
    </>
  );
};

export default React.memo(Comment);

*/
