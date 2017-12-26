import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import style from './style';

const propTypes = {};
const defaultProps = {};

class Extra extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     checked: props.checked,
  //   }
  // }
  //
  // onPress = () => {
  //   const checked = !this.state.checked
  //   if (checked) {
  //     this.props.onPress(this.props.extra)
  //   }
  //   this.setState({checked})
  // }

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.onPress(this.props.extra)}
        style={[style.extra, this.props.style]}
      >
        <View style={style.checkmark}>
          <Ionicons
            name={
              this.props.extra.checked
              ? "ios-checkmark-outline"
              : undefined
            }
            size={24}
          />
        </View>
        <Text style={style.text}>{this.props.extra.title}</Text>
        <Text style={style.price}>+{this.props.extra.price}€</Text>
      </TouchableOpacity>
    )
  }
}

export default Extra;
