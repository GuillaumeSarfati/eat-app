import React from 'react';
import PropTypes from 'prop-types';
import { Image, View, Text, TextInput } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Header from '../../components/Header';
import DeliveryActions from '../../actions/delivery';
import DeliveryEffects from '../../effects/delivery';

import style from './style';

class DeliveryScreen extends React.Component {
  componentWillMount() {
    this.props.deliveryEffects.getCurrentLocation()
  }
  onRegionChange = (region) => {
    this.props.deliveryEffects.getLocation(region)
  }
  onChangeText = (text) => {
    this.props.deliveryEffects.searchQuery(text)
  }
  render() {
    return (
      <View style={style.screen}>
        <Header title={this.props.delivery.pickedPosition.formatted_address}/>
        <MapView
          showsUserLocation
          style={style.map}
          onRegionChange={this.onRegionChange}
          // initialRegion={{
          //   latitude: 37.78825,
          //   longitude: -122.4324,
          //   latitudeDelta: 0.0922,
          //   longitudeDelta: 0.0421,
          // }}
        >
          <View style={style.searchWrapper}>
          <View style={style.search}>
            <Image style={style.queryIcon} source={require('../../assets/marker.png')}/>
            <TextInput
              style={style.query}
              value={this.props.delivery.query}
              onChangeText={this.onChangeText}
            />
          </View>
          </View>
          <View style={style.overlay} pointerEvents={'none'}>
            <Image source={require('../../assets/marker.png')} style={style.marker} />
          </View>
        </MapView>
      </View>
    );
  }
}

export default connect(
  state => ({
    delivery: state.delivery
  }),
  dispatch => ({
    deliveryActions: bindActionCreators(DeliveryActions, dispatch),
    deliveryEffects: bindActionCreators(DeliveryEffects, dispatch),
  }),
)(DeliveryScreen);
