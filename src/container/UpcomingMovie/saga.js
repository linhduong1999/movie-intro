import { call, put, takeLatest } from "redux-saga/effects";
import { callUpcomingMovieAPI } from "../../service/api";
import * as types from "./types";
import * as actions from "./action";

function* upcomingMovieSaga({ payload }) {
  if (payload.endDate !== null) {
    try {
      yield put(actions.loadUpcomingMovie(true));
      const data = yield call(
        callUpcomingMovieAPI,
        payload.endDate,
        payload.page
      );
      if (data != null) {
        yield put(actions.requestUpcomingMovieSuccess(data));
      } else {
        yield put(
          actions.requestUpcomingMovieFailed({
            message: "from upComingMovieSaga: cannot load data from server",
            cod: 404,
          })
        );
      }
      yield put(actions.loadUpcomingMovie(false));
    } catch (error) {
      console.log("Error from upComingMovieSaga");
    }
  }
}

export default function* watchUpcomingMovieSaga() {
  yield takeLatest(types.REQUEST_UPCOMING_MOVIE, upcomingMovieSaga);
}
