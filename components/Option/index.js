import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import style from './style';

const propTypes = {};
const defaultProps = {};

class Option extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.onPress(this.props.option)}
          style={[style.option, this.props.style]}
        >
          <View style={style.checkmark}>
            <Ionicons
              name={
                this.props.checked
                ? "ios-checkmark-outline"
                : undefined
              }
              size={24}
            />
          </View>
          <Text style={style.text}>{this.props.option.title}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


Option.propTypes = propTypes;
Option.defaultProps = defaultProps;

export default Option;
