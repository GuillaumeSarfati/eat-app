import { StyleSheet } from 'react-native';
import * as mixins from '../../styles/mixins';
import * as titles from '../../styles/titles';
import * as variables from '../../styles/variables';
import * as colors from '../../styles/colors';

export default StyleSheet.create({
  order: {
    ...mixins.flex('row', 'space-between', 'center'),
    ...mixins.background(colors.red),
    padding: 15,
  },
  title: {
    ...mixins.flex('row', 'space-between', 'center'),
  },
  titleText: {
    ...titles.h3,
    color: 'white'
  },
  priceText: {
    color: 'white',
    ...mixins.border(2, 'solid', 'white', variables.radius),
    padding: 5,
  },
});
