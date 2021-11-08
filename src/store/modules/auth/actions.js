export function signInRequest(username, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {username, password},
  };
}

export function signInSuccess(token, refreshToken, id, dateToken) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {token, refreshToken, id, dateToken},
  };
}

export function refreshUserToken(token) {
  return {
    type: '@auth/REFRESH_TOKEN',
    payload: {token},
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
export function wrongPass() {
  return {
    type: '@auth/WRONG_PASS',
  };
}
export function correctPass() {
  return {
    type: '@auth/CORRECT_PASS',
  };
}
