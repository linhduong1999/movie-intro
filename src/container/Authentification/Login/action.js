import * as types from './types'

export const loginRequest = (username, password) => ({
    type: types.LOGIN_SAGA,
    payload: {
        username,
        password
    }
})

export const loadUserData = (loading) => ({
    type: types.LOAD_USER_DATA,
    payload: {
        loading
    }
})

export const loginSuccess = (data) => ({
    type: types.LOGIN_SUCCESS,
    payload: {
        data
    }
})

export const loginFailed = (error) => ({
    type: types.LOGIN_FAILED,
    payload: {
        error
    }
})

export const logOut = () => ({
    type: types.LOG_OUT
})

export const saveToken = (tokenTobeAdded) => ({
    type: types.SAVE_TOKEN,
    payload: {
        tokenTobeAdded
    }
})

export const deleteToken = (tokenTobeDeleted) => ({
    type: types.DELETE_TOKEN,
    payload: {
        tokenTobeDeleted
    }
})