import { createAction } from 'redux-actions';
import { createApiAction, generateApiAction } from '../utils/api';

export const FIND = generateApiAction('PRODUCT_FIND');
export const ADD = 'PRODUCT_ADD';
export const REMOVE = 'PRODUCT_REMOVE';
export const EDIT = 'PRODUCT_EDIT';

export const find = createApiAction(FIND);
export const add = createAction(ADD);
export const remove = createAction(REMOVE);
export const edit = createAction(EDIT);

export default {
  find,
  add,
  remove,
  edit,
};
