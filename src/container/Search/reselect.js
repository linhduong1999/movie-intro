import { createSelector } from 'reselect'
import { isEmpty } from '../../helper/common';

const dataSelector = state => state.movieContainsSearchTerm.list


export const allSelector = createSelector(
    dataSelector,
    data => {
        if (!isEmpty(data)){
            return data;
        } else {
            return {}
        }
    }
)

export const totalPageSelector = createSelector(  
    dataSelector,
    data => {
        if (data.hasOwnProperty('total_pages')){
            return data.total_pages
        } else {
            return 0
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


const loadingSelector = state => state.movieContainsSearchTerm.loading


export const getLoadingSelector = createSelector(
    loadingSelector,
    loading => loading
)