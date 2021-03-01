import { createSelector } from 'reselect'

const dataSelector = state => state.popularMovie.list;

export const resultSelector = createSelector(
    dataSelector,
    data => {
        if (data.hasOwnProperty('results')){
            return {
                results: data.results
            } 
        } else {
            return {}
        }
    }
)

export const totalResults = createSelector(
    dataSelector,
    data => {
        if (data.hasOwnProperty('total_results')){
            return data.total_results
            
        } else {
            return {}
        }
    }
)