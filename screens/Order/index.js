import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Swipeout from 'react-native-swipeout';

import Header from '../../components/Header';
import Product from '../../components/Product';

import ProductsActions from '../../actions/products';
import OrdersActions from '../../actions/orders';

import style, { BUTTON_REMOVE_COLOR } from './style';

class OrderScreen extends React.Component {
  actions = [
    {
      text: 'Remove',
      backgroundColor: BUTTON_REMOVE_COLOR,
      onPress: this.props
    }
  ]

  keyExtractor = (item, index) => item.id + index;
  renderItem = ({item}, i) => (
    <Swipeout
      right={[{
        text: 'Remove',
        backgroundColor: BUTTON_REMOVE_COLOR,
        onPress: () => this.props.productsActions.remove(item),
      }]}
      autoClose
    >
      <Product
        product={item}
        onPress={() => this.props.navigation.navigate('EditProduct', item)}
        style={style.product}
      />
    </Swipeout>
  )
  render() {
    return (
      <View style={style.screen}>
        <Header title={"VOTRE COMMANDE"}/>
        <FlatList
          style={style.products}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          data={this.props.order.products}
        />
      </View>
    );
  }
}

export default connect(
  state => ({
    order: state.order,
  }),
  dispatch => ({
    productsActions: bindActionCreators(ProductsActions, dispatch),
    ordersActions: bindActionCreators(OrdersActions, dispatch),
  }),
)(OrderScreen);
