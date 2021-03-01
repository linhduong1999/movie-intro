import * as types from './types'

export const favoriteMovieAdded = (movie) => ({ 
    type: types.FAVORITE_MOVIE_ADDED,
    payload: {
        movie
    }
})

export const favoriteMovieDeleted = (id) => ({ 
    type: types.FAVORITE_MOVIE_DELETED,
    payload: {
        id
    }
})

// export const requestFavoriteMovie = () => ({
//     type: types.REQUEST_FAVORITE_MOVIE
// })

// export const loadFavoriteMovie = loading => ({
//     type: types.LOAD_FAVORITE_MOVIE,
//     payload: {
//         loading
//     }
// })

// export const requestFavoriteMovieSuccess = data => ({
//     types: types.REQUEST_FAVORITE_SUCCESS,
//     payload: {
//         data
//     }
// })

// export const requestFavoriteMovieFail = error => ({
//     types: types.REQUEST_FAVORITE_SUCCESS,
//     payload: {
//         error
//     }
// })