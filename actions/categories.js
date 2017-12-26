import { createAction } from 'redux-actions';
import { createApiAction, generateApiAction } from '../utils/api';

export const FIND = generateApiAction('CATEGORIES_FIND');

export const find = createApiAction(FIND);

export default {
  find,
};
