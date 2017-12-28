import { createAction } from 'redux-actions';
import { createApiAction, generateApiAction } from '../utils/api';

export const LOGIN = generateApiAction('ME_LOGIN');
export const SIGNUP = generateApiAction('ME_SIGNUP');

export const login = createApiAction(LOGIN);
export const signup = createApiAction(SIGNUP);

export default {
  login,
};
