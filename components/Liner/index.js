import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';

import style from './style';

const propTypes = {};
const defaultProps = {};

const Liner = props => (
  <View style={style.liner} />
);

Liner.propTypes = propTypes;
Liner.defaultProps = defaultProps;

export default Liner;
