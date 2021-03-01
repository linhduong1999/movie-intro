import * as types from './types';
import * as actions from './action';
import { call, put, takeLatest } from 'redux-saga/effects';
import { callMovieDetailByIdAPI } from '../../service/api'

function* movieDetailSaga({payload}) {
    try {
        yield put(actions.loadData(true));
        const data = yield call(callMovieDetailByIdAPI, payload.id);

        if (data != null) {
            yield put(actions.requestMovieDetailSuccess(data));
        } else {
            yield put(actions.requestMovieDetailFail({
                message: " From movieDetail Saga: cannot load data from server.",
                cod: 404
            }))
        }
        yield put(actions.loadData(false));
    } catch (error) {
        console.log('error from movieDetailSaga', error)
        
    }
}

export default function* watchMovieDetailSaga() {
    yield takeLatest(types.REQUEST_MOVIE_DETAIL_SAGA, movieDetailSaga);
}