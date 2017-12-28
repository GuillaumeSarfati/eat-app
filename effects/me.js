import Api from '../utils/api';
import MeActions from '../actions/me';

export const login = params => dispatch => dispatch(
  MeActions.login(
    Api.get(`/User/login`, params),
  ),
);

export const signup = params => dispatch => dispatch(
  MeActions.signup(
    Api.post(`/User/signup`, params),
  ),
);

export default {
  login,
  signup,
};
