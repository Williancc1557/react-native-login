import {StyleSheet} from 'react-native';
import {Colors} from '../../enums/colors';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
  },

  title: {
    marginTop: 50,
  },

  form: {
    marginTop: 30,
  },

  input: {
    marginBottom: 20,
  },

  buttonLabel: {
    fontSize: 18,
  },

  button: {
    marginTop: '10%',
  },

  errorMessage: {
    marginTop: 10,
    textAlign: 'center',
  },

  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: '35%',
    flexDirection: 'row',
  },

  link: {
    color: Colors.GREEN_COLOR,
    paddingLeft: 5,
  },
});