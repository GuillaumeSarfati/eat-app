import Api from '../utils/api';
import FeedsActions from '../actions/feeds';

export const find = params => dispatch => dispatch(
  FeedsActions.find(
    Api.get(`/Feeds/`, params),
  ),
);

export default {
  find,
};
