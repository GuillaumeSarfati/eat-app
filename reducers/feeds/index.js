import { handleActions } from 'redux-actions';
import lodash from 'lodash';
import uuid from 'uuid/v1';

import * as FEEDS from '../../actions/feeds';
import INITIAL_STATE from './initial';

export default handleActions({
  [FEEDS.FIND.FULFILLED]: (state, action) => {
    console.log(FEEDS.FIND.FULFILLED, action.payload.data);
    return action.payload.data;
  },

}, INITIAL_STATE);
