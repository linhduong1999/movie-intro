import { call, put, takeLatest} from 'redux-saga/effects';
import {callPopularMovieAPI} from '../../service/api'
import * as types from './types'
import * as actions from './action'

function* popularMovieSaga({payload}) {
    try {
        yield put(actions.loadPopularMovie(true))
        const data = yield call(callPopularMovieAPI, payload.page)
        if (data != null) {
            yield put(actions.popularMovieRequestSuccess(data))
        } else {
            yield put(actions.popularMovieRequestFail({
                message: 'From popularMovieSaga: cannot load data from sever.',
                cod: 404
            }))
        }

    } catch (error) {
        console.log('error from popularMovieSaga', error)

    }
}

export default function* watchPopularMovieSaga() {
    yield takeLatest(types.REQUEST_POPULAR_MOVIE_SAGA, popularMovieSaga)
}