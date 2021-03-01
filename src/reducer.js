import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { connectRouter } from 'connected-react-router'
import movieContainsSearchTermReducer from './container/Search/reducer'
import popularMovieReducer from './container/PopularMovie/reducer'
import movieDetailReducer from './container/MovieDetail/reducer'
import favoriteMovieReducer from './container/FavoriteMovie/reducer'
import loginReducer from './container/Authentification/Login/loginReducer'
import tokenReducer from './container/Authentification/Login/tokenReducer'
import upcomingMovieReducer from './container/UpcomingMovie/reducer'
import commentReducer from './container/Comment/reducer';

const popularMovieStorage = {
  key: "popularMoviePersist",
  storage,
  whitelist: ["list"]
}

const favoriteMovieStorage = {
  key: "favoriteMoviePersist",
  storage,
  whitelist: ["list"]
}

const tokenStorage = {
  key: "tokenPersist",
  storage,
  whitelist: ["token"]
}

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    movieContainsSearchTerm: movieContainsSearchTermReducer,
    popularMovie: persistReducer(popularMovieStorage, popularMovieReducer),
    movieDetail: movieDetailReducer,
    favoriteMovie: persistReducer(favoriteMovieStorage, favoriteMovieReducer),
    // upcomingMovie: persistReducer(upcomingMovieStorage, upcomingMovieReducer),
    upcomingMovie: upcomingMovieReducer,
    comment: commentReducer,
    login: loginReducer,
    token: persistReducer(tokenStorage, tokenReducer)
});

export default rootReducer;