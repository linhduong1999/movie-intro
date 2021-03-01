import { createSelector } from 'reselect';

const dataSelector = state => state.movieDetail.list;

// TRAILER
export const videoSelector = createSelector(
    dataSelector,
    data => {
        if (data.hasOwnProperty("videos")){
            if (data.videos.hasOwnProperty("results") && data.videos.results.length > 0) {
                return data.videos.results[0].key
                
            } else {
                return {}
            }
        } else {
            return {}
        }
    }
)


// LANDING
export const titleSelector = createSelector(
    dataSelector,
    data => {
        if (data.hasOwnProperty("title")) {
            return data.title;
        } else {
            return ""
        }
    }
)

export const individualBackdropSelector = createSelector(
    dataSelector,
    data => {
        if (data.hasOwnProperty("backdrop_path")){
            return data.backdrop_path
        } else {
            return ""
        }
    }
)

export const individualPosterSelector = createSelector(
    dataSelector,
    data => {
        if (data.hasOwnProperty("poster_path")){
                return data.poster_path
        } else {
            return ""
        }
    }
)


// GALLERY 
export const backdropSelector = createSelector(
    dataSelector,
    data => {
        if (data.hasOwnProperty("images")){
            console.log("reselect 1")
            if (data.images.hasOwnProperty("backdrops") && data.images.backdrops.length > 0){
                console.log('From reselect data.images.backdrops:', data.images.backdrops)
                return data.images.backdrops
            } else {
                return []
            }
        } else {
            return []
        }
    }
)

export const posterSelector = createSelector(
    dataSelector,
    data => {
        if (data.hasOwnProperty("images")){
            if (data.images.hasOwnProperty("posters") && data.images.posters.length > 0){
                return  data.images.posters
            } else {
                return []
            }
        } else {
            return []
        }
    }
)

// Overview
export const overviewSelector = createSelector(
    dataSelector,
    data => data
)
