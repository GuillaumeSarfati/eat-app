import { StyleSheet } from 'react-native';
import * as mixins from '../../styles/mixins';
import * as colors from '../../styles/colors';

export default StyleSheet.create({
  liner: {
    ...mixins.margin(0, 15),
    ...mixins.borderBottom(1, 'solid', colors.border)
  },
});
