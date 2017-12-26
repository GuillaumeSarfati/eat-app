import { createAction } from 'redux-actions';
import { createApiAction, generateApiAction } from '../utils/api';

export const GET_LOCATION = generateApiAction('DELIVERY_GET_LOCATION');
export const SET_LOCATION = generateApiAction('DELIVERY_SET_LOCATION');
export const GET_CURRENT_LOCATION = generateApiAction('DELIVERY_GET_CURRENT_LOCATION');
export const SET_CURRENT_LOCATION = generateApiAction('DELIVERY_SET_CURRENT_LOCATION');
export const SEARCH_QUERY = generateApiAction('DELIVERY_SEARCH_QUERY');
export const SET_QUERY = generateApiAction('DELIVERY_SET_QUERY');

export const getCurrentLocation = createAction(GET_CURRENT_LOCATION);
export const setCurrentLocation = createAction(SET_CURRENT_LOCATION);
export const getLocation = createApiAction(GET_LOCATION);
export const setLocation = createApiAction(SET_LOCATION);
export const searchQuery = createApiAction(SEARCH_QUERY);
export const setQuery = createApiAction(SET_QUERY);

export default {
  getLocation,
  setLocation,
  getCurrentLocation,
  setCurrentLocation,
  searchQuery,
  setQuery,
};
