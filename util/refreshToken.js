import api from '~/services/api';

export const refreshTokenSession = token => {
  api.defaults.headers.Authorization = `Bearer ${token}`;
  return;
};
