import Api from '../utils/api';
import OrdersActions from '../actions/orders';

export const submit = order => dispatch => dispatch(
  OrdersActions.submit(
    Api.post(`/Orders/`, order),
  ),
);

export default {
  submit,
};
