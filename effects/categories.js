import Api from '../utils/api';
import CategoriesActions from '../actions/categories';

export const find = params => dispatch => dispatch(
  CategoriesActions.find(
    Api.get(`/Categories/`, params),
  ),
);

export default {
  find,
};
