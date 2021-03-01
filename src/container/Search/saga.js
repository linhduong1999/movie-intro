import { call, put, takeLatest } from 'redux-saga/effects';
//import { push } from 'connected-react-router'
import { callSearchTermAPI } from '../../service/api';
import * as types from './types';
import * as action from './action';

function* movieContainSearchTermSaga({payload}) { // only searchMovie is dispatched to here. so payload will be movie
    if (payload.movie !== "" && payload.movie !== undefined) {
        try {
            yield put(action.loadData(true)) // dispatch loadData to reducer
            const data = yield call(callSearchTermAPI, payload.movie, payload.page) //goi callAPI truyen payload.list tham so
            if (data != null) {
            console.log('data:', data)
                yield put(action.searchSuccess(data)); // 
            } else {
                yield put(action.searchFail({
                    message: 'From movieSaga: cannot load data from sever.',
                    cod: 404
                }))
            }
            yield put(action.loadData(false))
        } catch (e) {
            console.log("Error from movieSaga")
        }
    }
}

export default function* watchmovieContainSearchTermSaga() {
    yield takeLatest(types.SEARCH_MOVIE_SAGA, movieContainSearchTermSaga)
}