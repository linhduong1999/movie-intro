import * as types from './types';

const initialState = {
    loading: false,
    list: {},
    error: null
}

const popularMovieReducer = (state= initialState, action) => {
    switch(action.type) {
        case (types.LOAD_POPULAR_MOVIE):
            return {
                ...state,
                loading: action.payload.loading
            }
        case (types.POPULAR_MOVIE_REQUEST_SUCCESS):
            return {
                ...state,
                list: action.payload.data,
                error: null
            }
        case (types.POPULAR_MOVIE_REQUEST_FAIL):
            return {
                ...state,
                list: {},
                error: action.payload.error
            }
        default:
            return state
    }
}

export default popularMovieReducer;