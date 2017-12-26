import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';

import style from './style';

const propTypes = {};
const defaultProps = {};

const Category = props => (
  <TouchableOpacity
    onPress={props.onPress}
    style={[style.category, props.style]}
  >
    <View style={style.icon}>
    </View>
    <Text style={style.text}>{props.title}</Text>
  </TouchableOpacity>
);

Category.propTypes = propTypes;
Category.defaultProps = defaultProps;

export default Category;
