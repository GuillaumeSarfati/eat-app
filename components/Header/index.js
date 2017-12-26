import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';

import style from './style';

const propTypes = {};
const defaultProps = {};

const Header = props => (
  <View style={style.title}>
    <Text style={style.titleText}>{props.title}</Text>
  </View>
);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
