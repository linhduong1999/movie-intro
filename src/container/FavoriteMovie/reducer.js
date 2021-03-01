import * as types from "./types";

const initialState = {
  movieAdded: "",
  movieDeletedID: "",
  list: [],
  loading: false,
  error: null,
};

const favoriteMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FAVORITE_MOVIE_ADDED:
      const alreadyExisted = state.list.find(element => element.id === action.payload.movie.id);
      if (!alreadyExisted) {
        return {
          ...state,
          movieAdded: action.payload.movie,
          list: [...state.list, action.payload.movie],
        };
      }

    case types.FAVORITE_MOVIE_DELETED:
      const tmpList = state.list.filter(
        (element) => element.id !== action.payload.id
      );
      return {
        ...state,
        movieDeletedID: action.payload.id,
        list: tmpList,
      };
    default:
      return state;
  }
};

export default favoriteMovieReducer;
