import { combineReducers } from 'redux';

import feeds from './feeds';
import categories from './categories';
import products from './products';
import order from './order';
import delivery from './delivery';

export default combineReducers({
  feeds,
  categories,
  products,
  order,
  delivery,
});
