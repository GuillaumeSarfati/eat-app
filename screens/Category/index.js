import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, TouchableOpacity, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Header from '../../components/Header';
import Product from '../../components/Product';
import Counter from '../../components/Counter';
import Order from '../../components/Order';

import ProductsActions from '../../actions/products';
import ProductsEffects from '../../effects/products';

import style from './style';

class CategoryScreen extends React.Component {
  componentWillMount() {
    this.props.productsEffects.find({
      filter: {
        where: {
          categoryId: this.props.navigation.state.params.id,
        },
      },
    });
  }

  keyExtractor = (item, index) => item.id;

  renderItem = ({item}) => (
    <Product
      key={item.title}
      product={item}
      onPress={() => this.props.navigation.navigate('ShowProduct', item)}
      style={style.product}
    >
      <Counter
        style={style.counter}
        onPressAdd={() => this.props.productsActions.add(item)}
        onPressRemove={() => this.props.productsActions.remove(item)}
      />
    </Product>
  )
  render() {
    return (
      <View style={style.screen}>
        <Header title={this.props.navigation.state.params.title}/>
        <FlatList
          style={style.products}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          data={this.props.products}
        />
        <Order
          onPress={() => this.props.navigation.navigate('Order')}
          style={style.order}
        />
      </View>
    );
  }
}

export default connect(
  state => ({
    products: state.products,
  }),
  dispatch => ({
    productsActions: bindActionCreators(ProductsActions, dispatch),
    productsEffects: bindActionCreators(ProductsEffects, dispatch),
  }),
)(CategoryScreen);
