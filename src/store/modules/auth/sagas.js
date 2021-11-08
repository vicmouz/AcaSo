import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '~/services/api';

import {signInSuccess, signFailure, wrongPass} from './actions';

export function* signIn({payload}) {
  try {
    const {username, password} = payload;
    const response = yield call(api.post, '/auth/login', {
      email: username,
      password,
    });
    const date = new Date();
    const tokenAccess = response.data.token.id_token;
    const user_id = response.data.user.id;
    const refreshToken = response.data.token.refresh_token;

    api.defaults.headers.Authorization = `Bearer ${tokenAccess}`;

    yield put(signInSuccess(tokenAccess, refreshToken, user_id, date));
  } catch (error) {
    if (String(error.response.data.message).includes('incorrect')) {
      yield put(wrongPass());
    }
    yield put(signFailure());
  }
}

export function setToken({payload}) {
  if (!payload) {
    return;
  }

  const {token} = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
