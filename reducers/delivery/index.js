import { handleActions } from 'redux-actions';
import lodash from 'lodash';
import uuid from 'uuid/v1';

import * as DELIVERY from '../../actions/delivery';
import INITIAL_STATE from './initial';

export default handleActions({
  [DELIVERY.GET_CURRENT_LOCATION.FULFILLED]: (state, action) => {
    console.log('DELIVERY.GET_CURRENT_LOCATION.FULFILLED', action.payload.data);
    return {
      ...state,
      currentPosition: action.payload.data.results[0]
    }
  },
  [DELIVERY.GET_LOCATION.FULFILLED]: (state, action) => {
    console.log('DELIVERY.GET_LOCATION.FULFILLED', action.payload.data);
    return {
      ...state,
      pickedPosition: action.payload.data.results
      && action.payload.data.results[0]
      && action.payload.data.results[0].formatted_address
      ? action.payload.data.results[0]
      : state.pickedPosition,
    }
  },
  [DELIVERY.SET_QUERY.DEFINE]: (state, action) => {
    console.log('DELIVERY.SET_QUERY.DEFINE', action.payload);
    return {
      ...state,
      query: action.payload
    }
  },
  [DELIVERY.SEARCH_QUERY.FULFILLED]: (state, action) => {
    console.log('DELIVERY.SEARCH_QUERY.FULFILLED', action.payload.data);
    return {
      ...state,
      queryResults: action.payload.data.results
    }
  },
}, INITIAL_STATE);
