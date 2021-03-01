import { createSelector } from 'reselect';

const favoriteMovieSlice = state => state.favoriteMovie.list

export const favoriteMovieSelector = createSelector(
    favoriteMovieSlice,
    data => data
)