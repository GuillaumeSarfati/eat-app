import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import style from './style';

class Order extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[style.order, this.props.style]}
      >
        <View style={style.title}>
          <Text style={style.titleText}>Commander maintenant</Text>
        </View>
        <Text style={style.priceText}>{this.props.order.total.toFixed(2)}€</Text>
      </TouchableOpacity>
    )
  }
}

export default connect(
  state => ({
    order: state.order,
  }),
  dispatch => ({}),
)(Order);
