import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
  wrongPass: false,
  id: null,
  refreshToken: null,
  dateToken: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.refreshToken = action.payload.refreshToken;
        draft.id = action.payload.id;
        draft.dateToken = action.payload.dateToken;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/REFRESH_USER_TOKEN': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        draft.wrongPass = false;
        break;
      }
      case '@auth/WRONG_PASS': {
        draft.wrongPass = true;
        break;
      }
      case '@auth/CORRECT_PASS': {
        draft.wrongPass = false;
        break;
      }
      default:
    }
  });
}
