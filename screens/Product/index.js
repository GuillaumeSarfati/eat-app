import React from 'react';
import PropTypes from 'prop-types';
import lodash from 'lodash';
import { ScrollView, TouchableOpacity, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Header from '../../components/Header';
import Add from '../../components/Add';
import Edit from '../../components/Edit';
import Liner from '../../components/Liner';
import Section from '../../components/Section';
import Option from '../../components/Option';
import Extra from '../../components/Extra';

import ProductsActions from '../../actions/products';

import style from './style';

class ProductScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log('STATE : ');
    console.log(props.navigation.state)
    this.state = {
      product: props.navigation.state.params,
      total: this.computeTotal(props.navigation.state.params),
    }
  }

  onPressAdd = () => {
    this.props.productsActions.add({
      ...this.state.product,
      total: this.state.total,
    });
    this.props.navigation.goBack();
  }

  onPressEdit = () => {
    this.props.productsActions.edit({
      ...this.state.product,
      total: this.state.total,
    });
    this.props.navigation.goBack();
  }

  computeTotal = (product) => {
    price = product.price
    price += lodash.sumBy(product.options.filter(option => option.checked), 'price')
    price += lodash.sumBy(product.extras.filter(extra => extra.checked), 'price')
    return price;
  }
  onPressOption = (selected) => {
    const newOptions = this.state.product.options.map(option => {
      if (selected === option) {
        option.checked = !option.checked
      }
      return option
    });
    const newProduct = {
      ...this.state.product,
      options: newOptions,
    }
    this.setState({
      product: newProduct,
    });
  }

  onPressExtra = (selected) => {
    const newExtras = this.state.product.extras.map(extra => {
      if (selected === extra) {
        extra.checked = !extra.checked
      }
      return extra
    });
    const newProduct = {
      ...this.state.product,
      extras: newExtras,
    }
    this.setState({
      product: newProduct,
      total: this.computeTotal(newProduct),
    });
  }

  render() {
    console.log('ROUTE NAME :', this.props.navigation.state.routeName);
    return (
      <View style={style.screen}>
        <Header title={this.state.product.title} />
        <ScrollView style={style.product}>
          <View style={style.preview}/>
          <View style={style.title}>
            <Text style={style.titleText}>{this.state.product.title}</Text>
          </View>
          <Liner />
          <View style={style.description}>
            <Text>{this.state.product.description}</Text>
          </View>
          <View style={style.options}>
            <Section title={'Option'}>
              {
                this.state.product.options.map((option, i) =>
                  <Option
                    key={i.toString()}
                    option={option}
                    checked={option.checked}
                    onPress={this.onPressOption}
                  />
                )
              }
            </Section>
          </View>
          <View style={style.extras}>
            <Section title={'Extra'}>
              {
                this.state.product.extras.map((extra, i) =>
                  <Extra
                    key={i.toString()}
                    extra={extra}
                    onPress={this.onPressExtra}
                  />
                )
              }
            </Section>
          </View>
          <View style={style.extras}/>
        </ScrollView>

          {
            this.props.navigation.state.routeName === 'ShowProduct' && (
              <Add
                total={this.state.total}
                onPress={this.onPressAdd}
                style={style.order}
              />
            )
          }

          {
            this.props.navigation.state.routeName === 'EditProduct' && (
              <Edit
                total={this.state.total}
                onPress={this.onPressEdit}
                style={style.order}
              />
            )
          }

      </View>
    )
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    productsActions: bindActionCreators(ProductsActions, dispatch),
  }),
)(ProductScreen);
