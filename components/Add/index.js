import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import style from './style';

class Add extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[style.order, this.props.style]}
      >
        <View style={style.title}>
          <Text style={style.titleText}>Ajouter au panier</Text>
        </View>
        <Text style={style.priceText}>{this.props.total.toFixed(2)}€</Text>
      </TouchableOpacity>
    )
  }
}

export default connect(
  state => ({}),
  dispatch => ({}),
)(Add);
