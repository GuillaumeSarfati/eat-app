import { handleActions } from 'redux-actions';
import lodash from 'lodash';
import uuid from 'uuid/v1';

import * as PRODUCTS from '../../actions/products';
import INITIAL_STATE from './initial';

export default handleActions({
  [PRODUCTS.FIND.FULFILLED]: (state, action) => {
    return action.payload.data;
  },

}, INITIAL_STATE);
