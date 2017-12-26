import { StackNavigator } from 'react-navigation';

import Home from './Home';
import Menu from './Menu';
import Category from './Category';
import Product from './Product';
import Order from './Order';
import Payment from './Payment';
import Delivery from './Delivery';

export const defaultNavigator = StackNavigator({
  Home: { screen: Home, path: '/Home' },
  Menu: { screen: Menu, path: '/Menu' },
  Category: { screen: Category, path: '/Category' },
}, {
  initialRouteName: 'Home',
  cardStyle: {
    shadowColor: 'transparent',
  },
  navigationOptions: {
    header: null,
    loggingEnabled: false,
  },
});

const modalNavigator = StackNavigator({
  ShowProduct: { screen: Product, path: '/Product/Show' },
  EditProduct: { screen: Product, path: '/Product/Edit' },
  Order: { screen: Order, path: '/Order' },
  Payment: { screen: Payment, path: '/Payment' },
  Delivery: { screen: Delivery, path: '/Delivery' },
  defaultNavigator: { screen: defaultNavigator, path: '/Home' },
}, {
  initialRouteName: 'defaultNavigator',
  mode: 'modal',
  headerMode: 'none',
  navigationOptions: {
    header: null,
    loggingEnabled: false,
  },
});

export default modalNavigator;
