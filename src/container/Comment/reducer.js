/*

import * as types from "./types";
import { REQUEST_COMMENT, REQUEST_COMMENT_SUCCESS } from "./types";

const initialState = {
  loading: false,
  list: {},
  error: null,
  count: 0,
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_COMMENT:
      return {
        ...state,
        count: action.payload.count,
      };
    case types.LOAD_COMMENT:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case types.REQUEST_COMMENT_SUCCESS:
      return {
        ...state,
        list: action.payload.data,
        error: null,
      };
    case types.REQUEST_COMMENT_FAILED:
      return {
        ...state,
        list: {},
        error: action.payload.error,
      };
    default:
        return state
  }
};

export default commentReducer
*/