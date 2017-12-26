import { StyleSheet } from 'react-native';
import * as mixins from '../../styles/mixins';
import * as colors from '../../styles/colors';

export default StyleSheet.create({
  title: {
    ...mixins.flex('column', 'center', 'center'),
    alignSelf: 'stretch',
    height: 100,
    paddingTop: 22,
    backgroundColor: 'black',
  },
  titleText: {
    color: 'white',
  },
});
