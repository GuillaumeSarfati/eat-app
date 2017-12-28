import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import style from './style';

export default class Signup extends React.Component {
  onPress = name => () => {
      this.props.navigation.navigate(name);
  }

  render() {
    return (
      <View style={style.screen}>
        <Text style={style.title}> SIGNUP! </Text>
        <View style={style.container}>
          <View>
            <TextInput
              style={style.input}
              placeholder="Email"
            />
          </View>
          <View>
            <TextInput
              style={style.input}
              placeholder="Password"
            />
          </View>
          <View>
            <TextInput
              style={style.input}
              placeholder="Confirm password"
            />
          </View>
          <View style={style.actions}>
          <TouchableOpacity style={style.buttonSignup}>
            <Text style={style.buttonText}>SIGNUP!</Text>
          </TouchableOpacity>
          </View>
        </View>
        <View style={style.footer}>
          <Text>Alrealy have an account ? </Text>
          <TouchableOpacity
            onPress={this.onPress('Login')}
            >
              <Text style={style.signupText}>Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}
