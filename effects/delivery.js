import { Constants, Location, Permissions } from 'expo';
import { Platform } from 'react-native';
import qs from 'qs';
import { PlaceAutoComplete, Geocode } from '../utils/api';

import DeliveryActions from '../actions/delivery';

const convertCoordToLocation = coords => Geocode.post(`/json?${qs.stringify({
  latlng: `${coords.latitude}, ${coords.longitude}`,
  result_type: 'street_address',
  key: 'AIzaSyA4Jo_0FDtc411OpasblG6eQip0nOXbkxQ',
})}`);

const getCurrentLocationAsync = async (dispatch) => {
  console.log('GET CURRENT LOCATION ASYNC');
  const { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (Platform.OS === 'android' && !Constants.isDevice) {
    return console.warn('Oops, getLocationAsync will not work on Sketch in an Android emulator. Try it on your device!');
  }
  if (status !== 'granted') {
    // TODO Check global denied perms with redux action
    return console.warn('Permission to access location was denied');
  }

  const location = await Location.getCurrentPositionAsync({});
  console.log('LOCATION : ', location);
  return dispatch(DeliveryActions.getLocation(convertCoordToLocation(location.coords)));
};
export const getLocation = (coords) => dispatch => dispatch(
  DeliveryActions.getLocation(convertCoordToLocation(coords))
)
export const getCurrentLocation = () => dispatch => getCurrentLocationAsync(dispatch);

export const searchQuery = query => (dispatch, getState) => {
  dispatch(DeliveryActions.setQuery(query));
  return dispatch(DeliveryActions.searchQuery(PlaceAutoComplete.post(`/json?language=fr&input=${query}&types=(city)&key=AIzaSyA4Jo_0FDtc411OpasblG6eQip0nOXbkxQ`)));
};

export default {
  getLocation,
  getCurrentLocation,
  searchQuery,
};
