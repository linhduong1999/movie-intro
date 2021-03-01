import * as types from './types'

export const requestUpcomingMovie = (endDate, page) => ({
    type: types.REQUEST_UPCOMING_MOVIE,
    payload: {
        endDate,
        page
    }
})

export const loadUpcomingMovie = (loading) => ({
    type: types.LOAD_UPCOMING_MOVIE,
    payload: {
        loading
    }
})

export const requestUpcomingMovieSuccess = (data) => ({
    type: types.REQUEST_UPCOMING_MOVIE_SUCCESS,
    payload: {
        data
    }
})

export const requestUpcomingMovieFailed = (error) => ({
    type: types.REQUEST_UPCOMING_MOVIE_FAILED,
    payload: {
        error
    }
})