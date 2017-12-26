import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Header from '../../components/Header';

import style, { BUTTON_REMOVE_COLOR } from './style';

class PaymentScreen extends React.Component {

  render() {
    return (
      <View style={style.screen}>
        <Header title={"MOYEN DE PAIEMENT"}/>

      </View>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({}),
)(PaymentScreen);
