import { handleActions } from 'redux-actions';
import lodash from 'lodash';
import uuid from 'uuid/v1';

import * as PRODUCTS from '../../actions/products';
import INITIAL_STATE from './initial';

export default handleActions({
  [PRODUCTS.ADD]: (state, action) => {
    const newProduct = {
      ...action.payload,
      _id: uuid(),
    }
    const newProducts = [
      ...state.products,
      newProduct,
    ];

    const newTotal = lodash.sumBy(newProducts, product => product.total || product.price)

    return {
      products: newProducts,
      total: newTotal,
    }
  },
  [PRODUCTS.REMOVE]: (state, action) => {
    state.products.splice(state.products.indexOf(action.payload), 1);

    const newProducts = [
      ...state.products,
    ];

    const newTotal = lodash.sumBy(newProducts, product => product.total || product.price)

    return {
      products: newProducts,
      total: newTotal,
    }
  },
  [PRODUCTS.EDIT]: (state, action) => {

    const newProducts = state.products.map((product) => {
      if (action.payload._id && action.payload._id === product._id) {
        return action.payload
      }
      return product
    });

    const newTotal = lodash.sumBy(newProducts, product => product.total || product.price)

    return {
      products: newProducts,
      total: newTotal,
    }
  },
}, INITIAL_STATE);
