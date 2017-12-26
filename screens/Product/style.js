import { StyleSheet } from 'react-native';
import * as screen from '../../styles/screen';
import * as mixins from '../../styles/mixins';
import * as titles from '../../styles/titles';
import * as helpers from '../../styles/helpers';

export default StyleSheet.create({
  screen: {
    ...screen.background,
    flex: 1,
    ...mixins.flex('column', 'center', 'center'),
  },
  product: {
    flex: 1,
    alignSelf: 'stretch',
  },
  preview: {
    backgroundColor: 'grey',
    height: helpers.screenHeight / 3,
  },
  title: {
    padding: 15,
  },
  titleText: {
    ...titles.h3,
  },
  description: {
    padding: 15,
  },
  order: {
    alignSelf: 'stretch',
  },
});
