import { StyleSheet } from 'react-native';
import { ColorsTheme } from './ColorsTheme';

export const graphics = StyleSheet.create({
  icon: {
    marginTop: 23,
    paddingRight: 10,
    position: 'absolute'
  },
  iconActive: {
    color: ColorsTheme.primaryColor
  },
  iconInactive: {
    color: ColorsTheme.gray
  }
})

export const controls = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: '100%',
    height: 45,
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
    alignItems: 'center',
    fontSize: 14,
    paddingLeft: 5
  },
  inputActive: {
    borderColor: ColorsTheme.primaryColor
  },
  inputInactive: {
    borderColor: ColorsTheme.gray
  }
})

export const containers = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 55
  },
})
