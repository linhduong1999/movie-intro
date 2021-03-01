import * as types from './types'

const initialState = {
    infoUser: {},
    loading: false,
    error: null
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case (types.LOAD_USER_DATA):
            return {
                ...state,
                loading: action.payload.loading
            }
        case (types.LOGIN_SUCCESS):
            return {
                ...state,
                infoUser: action.payload.data,
                error: null
            }
        case (types.LOGIN_FAILED):
            return {
                ...state,
                infoUser: {},
                error: action.payload.error
            }
        case (types.LOG_OUT):
            return {
                ...state,
                infoUser: {},
                error: null
            }
        default:
            return state
    }
}

export default loginReducer;