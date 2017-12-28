import { StyleSheet } from 'react-native';
import * as screen from '../../styles/screen';
import * as mixins from '../../styles/mixins';

export default StyleSheet.create({
  screen: {
    flex: 1,
    ...screen.background,
    ...mixins.flex('column', 'center', 'center'),
  },
  container: {
    width: 242,
    height: 242,
  },
  title: {
    marginBottom: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    borderBottomColor: 'rgba(42, 42, 42, 0.5)',
    borderBottomWidth: 1,
    padding: 10,
  },
  actions: {
    flexDirection: 'row',
  },
  buttonSignup: {
    ...mixins.flex('row', 'center', 'center'),
    flex: 1,
    padding: 10,
    backgroundColor: '#00BC9E',
    marginRight: 2,
    borderRadius: 10,
    marginTop: 15,
  },
  buttonText: {
    fontSize: 10,
    color: 'white',
  },
  footer: {
    flexDirection: 'row',
  },
  signupText: {
    color: '#00BC9E',
  },
});
