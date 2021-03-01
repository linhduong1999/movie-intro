/*

*/
import { call, put, takeLatest } from "redux-saga/effects";
import { callRequestCommentAPI, callSubmitCommentAPI } from "../../service/api";
import * as types from "./types";
import * as action from "./action";

function* requestCommentSaga({ payload }) {
  try {
    yield put(action.loadComment(true));
    const data = yield call(callRequestCommentAPI, payload.count);
    if (data != null) {
      yield put(action.requestCommentSuccess(data));
    } else {
      yield put(
        action.requestCommentFailed({
          message: "From commentSaga: cannot load data from server",
          cod: 404,
        })
      );
    }
    yield put(action.loadComment(false));
  } catch (error) {
    console.log("Error from commentSaga");
  }
}

// SUBMIT
export function* watchRequestCommentSaga() {
  yield takeLatest(types.REQUEST_COMMENT, requestCommentSaga);
}

function* submitCommentSaga({ payload }) {
  try {
    const submitSucess = yield call(
      callSubmitCommentAPI,
      payload.content,
      payload.userID,
      payload.currentNoComment,
    );
    if (submitSucess) {
      yield put(action.requestComment(payload.currentNoComment + 1));
    } else {
    }
  } catch (error) {
    console.log("Error from submitCommentSaga");
  }
}

export function* watchSubmitCommentSaga() {
  yield takeLatest(types.SUBMIT_COMMENT_SAGA, submitCommentSaga)
}