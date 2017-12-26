import { StyleSheet } from 'react-native';
import * as mixins from '../../styles/mixins';
import * as titles from '../../styles/titles';
import * as variables from '../../styles/variables';
import * as colors from '../../styles/colors';

export default StyleSheet.create({
  product: {
    flex: 1,
    ...mixins.flex('row', 'flex-start', 'center'),
    backgroundColor: 'white',
  },
  card:{
    flex:1,
    ...mixins.flex('row', 'center', 'center'),
  },
  icon: {
    ...mixins.border(1, 'dashed', colors.border, variables.radius),
    width: 80,
    height: 80,
    margin: 15,
  },
  summary:{
    flex: 1,
    alignSelf: 'stretch',
    ...mixins.flex('column', 'center', 'flex-start'),
  },
  title: {
  },
  titleText: {
    ...titles.h3,
  },
  description: {

  },
  descriptionText: {
    color: 'grey',
  },
  price: {

  },
  priceText: {

  },
});
