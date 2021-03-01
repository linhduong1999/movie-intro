import * as types from "./types"

const initialState = {
    searchTerm: "",
    loading: null,
    list: {},
    error: null
}

const movieContainsSearchTermReducer = (state = initialState, action) => {
    switch (action.type) {

        case (types.LOADING_SEARCH):
            return {
                ...state,
                loading: action.payload.loading
            }
        case (types.SEARCH_SUCCESS):
            return {
                ...state,
                list: action.payload.data,
                error: null
            }
        case (types.SEARCH_FAIL):
            return {
                ...state,
                list: {},
                error: action.payload.error
            }
        default:
            return state
    }
}

export default movieContainsSearchTermReducer