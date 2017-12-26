import { StyleSheet } from 'react-native';
import * as mixins from '../../styles/mixins';
import * as variables from '../../styles/variables';
import * as colors from '../../styles/colors';

export const BUTTON_SIZE = 30;
export const BUTTON_PADDING = 5;
export const NUMBER_SIZE = BUTTON_SIZE * 1.5;

export default StyleSheet.create({
  counter: {
    ...mixins.flex('row', 'center', 'center'),
  },
  add: {
    ...mixins.flex('row', 'center', 'center'),
    ...mixins.border(1, 'solid', colors.border, 3),
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    padding: BUTTON_PADDING,
  },
  number: {
    ...mixins.flex('row', 'center', 'center'),
    width: NUMBER_SIZE,
    padding: BUTTON_PADDING,
  },
  remove: {
    ...mixins.flex('row', 'center', 'center'),
    ...mixins.border(1, 'solid', colors.border, 3),
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    padding: BUTTON_PADDING,
  },
});
