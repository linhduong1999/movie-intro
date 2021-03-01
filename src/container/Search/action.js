import * as types from "./types"

export const searchMovie = (movie, page) => ({
    type: types.SEARCH_MOVIE_SAGA,
    payload: {
        movie,
        page
    }
})

export const loadData = loading => ({
    type: types.LOADING_SEARCH,
    payload: {loading}
})

export const searchSuccess = data => ({
    type: types.SEARCH_SUCCESS,
    payload: {data}
})

export const searchFail = error => ({
    type: types.SEARCH_FAIL,
    payload: {error}
})