import * as types from './types';

export const requestMovieDetail = (id) => ({
    type: types.REQUEST_MOVIE_DETAIL_SAGA,
    payload: {
        id
    }
})

export const loadData = (loading) => ({
    type: types.LOAD_DATA,
    payload: {
        loading
    }
})

export const requestMovieDetailSuccess = (data) => ({
    type: types.REQUEST_MOVIE_DETAIL_SUCCESS,
    payload: {
        data
    }
})

export const requestMovieDetailFail = (error) => ({
    type: types.REQUEST_MOVIE_DETAIL_FAIL,
    payload: {
        error
    }
})