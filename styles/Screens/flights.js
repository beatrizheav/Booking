import { StyleSheet } from 'react-native'
import { colorsTheme } from '../colorsTheme'

export const containers = StyleSheet.create({
  main: {
    marginVertical: 40,
    marginHorizontal: 20
  },
  infoContainer: {
    marginVertical: 20
  }
})

export const texts = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colorsTheme.primaryColor
  }
})
