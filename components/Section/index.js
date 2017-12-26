import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Liner from '../Liner';

import style from './style';

const propTypes = {};
const defaultProps = {};

class Section extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: props.checked,
    }
  }

  onPress = () => {
    const checked = !this.state.checked
    if (checked) {
      this.props.onPress(this.props.option)
    }
    this.setState({checked})
  }

  render() {
    return (
      <View>
        <View style={style.title}>
          <Text style={style.titleText}>{this.props.title}</Text>
        </View>
        <View>
          { this.props.children }
        </View>
      </View>
    )
  }
}


Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default Section;
