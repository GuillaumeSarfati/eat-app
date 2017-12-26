import { StyleSheet } from 'react-native';
import * as mixins from '../../styles/mixins';
import * as variables from '../../styles/variables';
import * as colors from '../../styles/colors';

export default StyleSheet.create({
  extra: {
    marginBottom: 15,
    ...mixins.flex('row', 'flex-start', 'center'),
  },
  checkmark: {
    ...mixins.flex('column', 'center', 'center'),
    ...mixins.border(1, 'solid', colors.border, 30),
    ...mixins.margin(5, 15, 5, 15),
    paddingTop: 2,
    backgroundColor: 'transparent',
    width: 30,
    height: 30,
  },
  text: {
    flex: 1,
    ...mixins.flex('row', 'center', 'center'),
  },
  extra: {
    flex: 1,
    ...mixins.flex('row', 'center', 'center'),
    paddingRight: 15,
  }
});
