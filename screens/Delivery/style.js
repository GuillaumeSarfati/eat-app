import { StyleSheet } from 'react-native';
import * as screen from '../../styles/screen';
import * as mixins from '../../styles/mixins';
import * as colors from '../../styles/colors';

export default StyleSheet.create({
  screen: {
    flex: 1,
    ...screen.background,
    ...mixins.flex('column', 'center', 'center'),
  },
  map: {
    flex: 1,
    alignSelf: 'stretch',
  },
  marker: {
    width: 40,
    height: 40,
  },
  overlay: {
    flex: 1,
    ...mixins.flex('column', 'center', 'center'),
  },
  searchWrapper: {
    ...mixins.flex('row', 'center', 'center'),
    padding: 10,

  },
  search: {
    ...mixins.flex('row', 'center', 'center'),
    backgroundColor: 'white',
    padding: 5,
  },
  queryIcon: {
    margin: 10,
    width: 20,
    height: 20,
    opacity: 0.2,
  },
  query: {
    flex: 1,
    alignSelf: 'stretch',
    padding: 10,
  }
});
