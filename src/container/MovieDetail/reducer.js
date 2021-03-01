import * as types from './types';

const initialState = {
    id: null,
    loading: false,
    list : {},
    error: null
}

const movieDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_DATA: 
            return {
                ...state,
                loading: action.payload.loading
            }
        case types.REQUEST_MOVIE_DETAIL_SUCCESS:
            return {
                ...state,
                list: action.payload.data,
                error: null
            }
        case types.REQUEST_MOVIE_DETAIL_FAIL:
            return {
                ...state,
                list: {},
                error: action.payload.error
            }
        default: 
            return state
    }
}

export default movieDetailReducer;