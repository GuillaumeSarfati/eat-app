import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';

import Counter from '../Counter';

import style from './style';

const propTypes = {};
const defaultProps = {};

const Product = props => (
  <View style={style.product}>
    <TouchableOpacity
      onPress={props.onPress}
      style={style.card}
    >
      <View style={style.icon} />
      <View style={style.summary}>
        <View style={style.title}>
          <Text style={style.titleText}>{props.product.title}</Text>
        </View>
        <View style={style.description}>
          <Text style={style.descriptionText}>{props.product.description}</Text>
        </View>
        <View style={style.price}>
          <Text style={style.priceText}>{(props.product.total || props.product.price).toFixed(2)}€</Text>
        </View>
      </View>
      <Text style={style.text}>{props.product.name}</Text>
    </TouchableOpacity>
    { props.children }
  </View>
);

Product.propTypes = propTypes;
Product.defaultProps = defaultProps;

export default Product;
