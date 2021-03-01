import * as types from './types'

const initialState = {
    endDate: "",
    list: {},
    loading: null,
    error: null
}

const upcomingMovieReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.REQUEST_UPCOMING_MOVIE:
            return {
                ...state,
                endDate: action.payload.endDate
            }
        case types.LOAD_UPCOMING_MOVIE:
            return {
                ...state,
                loading: action.payload.loading
            }
        case types.REQUEST_UPCOMING_MOVIE_SUCCESS:
            return {
                ...state,
                list: action.payload.data,
                error: null
            }
        case types.REQUEST_UPCOMING_MOVIE_FAILED:
            return {
                ...state,
                list: {},
                error: action.payload.error
            }
        default:
            return state
    }
}

export default upcomingMovieReducer;