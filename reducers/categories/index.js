import { handleActions } from 'redux-actions';
import lodash from 'lodash';
import uuid from 'uuid/v1';

import * as CATEGORIES from '../../actions/categories';
import INITIAL_STATE from './initial';

export default handleActions({
  [CATEGORIES.FIND.FULFILLED]: (state, action) => {
    return action.payload.data;
  },

}, INITIAL_STATE);
