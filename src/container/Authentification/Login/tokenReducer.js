import * as types from './types';


const initialState = {
    token: null
}

const tokenReducer = (state=initialState, action) => {
    switch(action.type) {
        case types.SAVE_TOKEN:
            return {
                ...state,
                token: action.payload.tokenTobeAdded
            }
        case types.DELETE_TOKEN:
            return {
                ...state,
                token: action.payload.tokenTobeDeleted
            }
        default:
            return state
    }
}

export default tokenReducer;