import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Header from '../../components/Header';
import Category from '../../components/Category'
import Order from '../../components/Order'

import CategoriesEffects from '../../effects/categories';

import style from './style';

const propTypes = {};
const defaultProps = {};

class Menu extends React.Component {

  componentDidMount() {
    this.props.categoriesEffects.find();
  }

  render() {
    return (
      <View style={style.screen}>
        <Header title={'Menu'} />
        <View style={style.categories}>
          {
            this.props.categories.map((category, i) =>
              <Category
                key={category.name}
                title={`${category.title}`}
                onPress={() => this.props.navigation.navigate('Category', category)}
                style={style.category}
              />
            )
          }
        </View>
        <Order
          onPress={() => this.props.navigation.navigate('Order')}
          style={style.order}
        />
      </View>
    );
  }
}

export default connect(
  state => ({
    categories: state.categories,
  }),
  dispatch => ({
    categoriesEffects: bindActionCreators(CategoriesEffects, dispatch),
  }),
)(Menu);
