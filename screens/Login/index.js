import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import style from './style';

export default class Login extends React.Component {

  onPress = name => () => {
      this.props.navigation.navigate(name);
  }

  render() {
    return (
      <View style={style.screen}>
        <Text style={style.title}> SPEED BURGER </Text>
        <View style={style.container}>
        <View>
          <TextInput
            style={style.input}
            placeholder="Email"
            underlineColorAndroid="transparent"
          />
        </View>
        <View>
          <TextInput
            style={style.input}
            placeholder="Password"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={style.actions}>
          <TouchableOpacity
            style={style.buttonLogin}
          >
            <Text style={style.buttonText}>LOGIN!</Text>
          </TouchableOpacity>
        </View>
        </View>
        <View style={style.footer}>
          <Text>Don't have an account ? </Text>
          <TouchableOpacity
            onPress={this.onPress('Signup')}
            >
              <Text style={style.signupText}>Create one</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}
