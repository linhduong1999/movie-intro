import { all, call } from 'redux-saga/effects'
import watchmovieContainSearchTermSaga from './container/Search/saga'
import watchPopularMovieSaga from './container/PopularMovie/saga'
import watchMovieDetailSaga from './container/MovieDetail/saga'
import { watchLoginSaga, watchLogoutSaga } from './container/Authentification/Login/saga'
import watchUpcomingMovieSaga from './container/UpcomingMovie/saga'
import {watchRequestCommentSaga, watchSubmitCommentSaga} from './container/Comment/saga'

export default function* rootSaga() {
    yield all([
        call(watchmovieContainSearchTermSaga),
        call(watchPopularMovieSaga),
        call(watchMovieDetailSaga),
        call(watchUpcomingMovieSaga),
        call(watchLoginSaga),
        call(watchLogoutSaga),
        call(watchRequestCommentSaga),
        call(watchSubmitCommentSaga),
    ])
}