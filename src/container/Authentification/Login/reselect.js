import { createSelector } from 'reselect';

const loadingSelector = state => state.login.loading

export const getLoading = createSelector(
    loadingSelector,
    data => data
)
