import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router'
import * as actions from './action';
import * as types from './types'
import { loginApi } from '../../../service/login'

function* loginSaga({payload}) {
    try {
        yield put(actions.loadUserData(true));
        const data = yield call(loginApi, payload.username, payload.password)
        if (data.cod === 200) {
            yield put(actions.loginSuccess(data))
            yield put(actions.saveToken(data.token_user))
            yield put(actions.loadUserData(false))
            yield put(push('/'))
        } else {
            yield put(actions.loginFailed({
                message: "username or password is invalid",
                cod: 404
            }))
            yield put(actions.deleteToken(null))
            yield put(actions.loadUserData(false))
        }
    } catch (error) {
        console.log("error from loginSaga", error)
    }
}

export function* watchLoginSaga() {
    yield takeLatest(types.LOGIN_SAGA, loginSaga)
}


function* logOutSaga() {
    try {
        yield put(actions.deleteToken(null))
        yield put(push('/'))
    } catch (error) {
        console.log("error from logoutSaga", error)
    }
}

export function* watchLogoutSaga() {
    yield takeLatest(types.LOG_OUT, logOutSaga)
}