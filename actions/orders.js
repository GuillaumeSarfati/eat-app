import { createAction } from 'redux-actions';
import { createApiAction, generateApiAction } from '../utils/api';

export const SUBMIT = 'ORDERS_SUBMIT';

export const submit = createAction(SUBMIT);

export default {
  submit,
};
