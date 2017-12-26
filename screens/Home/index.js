import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';

import style from './style';

const propTypes = {};
const defaultProps = {};


const HomeScreen = props => (
  <View style={style.screen}>
    <Text>Home</Text>
    <TouchableOpacity
      onPress={() => props.navigation.navigate('Menu')}
    >
      <Text>Menu</Text>
    </TouchableOpacity>
  </View>
);

HomeScreen.propTypes = propTypes;
HomeScreen.defaultProps = defaultProps;

export default HomeScreen;
