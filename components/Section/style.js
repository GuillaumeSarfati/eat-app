import { StyleSheet } from 'react-native';
import * as mixins from '../../styles/mixins';
import * as variables from '../../styles/variables';
import * as colors from '../../styles/colors';

export default StyleSheet.create({
  section: {
    ...mixins.flex('row', 'flex-start', 'center'),
  },
  title: {
    backgroundColor: colors.grey,
    padding: 15,

  },
  titleText: {
    color: 'grey',
  },
});
