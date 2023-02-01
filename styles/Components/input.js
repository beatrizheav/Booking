import { StyleSheet } from 'react-native'
import { colorsTheme } from '../colorsTheme'

export const graphics = StyleSheet.create({
  icon: {
    marginTop: 23,
    paddingRight: 10,
    position: 'absolute'
  },
  iconActive: {
    color: colorsTheme.primaryColor
  },
  iconInactive: {
    color: colorsTheme.gray
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
    borderColor: colorsTheme.primaryColor
  },
  inputInactive: {
    borderColor: colorsTheme.gray
  }
})

export const containers = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 55
  },
})
