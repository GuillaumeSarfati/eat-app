import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';

import style from './style';

const propTypes = {};
const defaultProps = {};

export default class Counter extends React.Component {
  state = {
    counter: 0
  }

  onPressAdd = () => {
    const counter = this.state.counter < 99
      ? this.state.counter + 1
      : 99
    this.setState({ counter })
    this.props.onPressAdd()
  }
  onPressRemove = () => {
    const counter = this.state.counter
      ? this.state.counter - 1
      : 0
    this.setState({ counter })
    this.props.onPressRemove()
  }
  render() {
    return (
      <View style={[style.counter, this.props.style]}>

        <TouchableOpacity
          onPress={this.onPressRemove}
          style={style.remove}
          >
            <Text>-</Text>
        </TouchableOpacity>

        <View style={style.number}>
          <Text>{this.state.counter}</Text>
        </View>

        <TouchableOpacity
          onPress={this.onPressAdd}
          style={style.add}
          >
            <Text>+</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
