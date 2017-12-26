import { StyleSheet } from 'react-native';
import * as mixins from '../../styles/mixins';
import * as variables from '../../styles/variables';
import * as colors from '../../styles/colors';

export default StyleSheet.create({
  category: {
    marginBottom: 15,
    ...mixins.flex('column', 'center', 'center'),
  },
  icon: {
    ...mixins.border(1, 'dashed', colors.border, variables.radius),
    width: 80,
    height: 80,
    margin: 15,
  },
  text: {
    ...mixins.flex('row', 'center', 'center'),
  },
});
