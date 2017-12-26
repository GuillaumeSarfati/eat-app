import Api from '../utils/api';
import ProductsActions from '../actions/products';

export const find = params => dispatch => dispatch(
  ProductsActions.find(
    Api.get(`/Products/`, params),
  ),
);

export default {
  find,
};
