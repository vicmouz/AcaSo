import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '~/services/api';

import {signInSuccess, signFailure} from './actions';

export function* signIn({payload}) {
  try {
    const {username, password} = payload;
    const response = yield call(api.post, '/auth/login', {
      email: username,
      password,
    });

    console.log(response.data);
    const tokenAccess = response.data.token.id_token;
    const user_id = response.data.user.id;

    api.defaults.headers.Authorization = `Bearer ${tokenAccess}`;
    console.log(user_id);
    yield put(signInSuccess(tokenAccess, user_id));
  } catch (error) {
    console.log(error);
    Alert.alert('Falha na autenticação', 'usuário ou senha inválido');

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
