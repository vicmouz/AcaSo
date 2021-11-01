export function signInRequest(username, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {username, password},
  };
}

export function signInSuccess(token, id) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {token, id},
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
