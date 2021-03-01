import * as types from './types';

export const requestPopularMovie = page => ({
    type: types.REQUEST_POPULAR_MOVIE_SAGA,
    payload: {
        page
    }
})

export const loadPopularMovie = loading => ({
    type: types.LOAD_POPULAR_MOVIE,
    payload: {
        loading
    }
})

export const popularMovieRequestSuccess = data => ({
    type: types.POPULAR_MOVIE_REQUEST_SUCCESS,
    payload: {
        data
    }
})

export const popularMovieRequestFail = error => ({
    type: types.POPULAR_MOVIE_REQUEST_FAIL,
    payload: {
        error
    }
})