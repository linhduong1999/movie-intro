import { createSelector } from 'reselect'

const dataSelector = state => state.upcomingMovie.list;

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

export const totalResultSelector = createSelector(  
    dataSelector,
    data => {
        if (data.hasOwnProperty('total_results')){
            return data.total_results
        } else {
            return 0
        }
    }

)


const loadingSelector = state => state.upcomingMovie.loading


export const getLoadingSelector = createSelector(
    loadingSelector,
    loading => loading
)