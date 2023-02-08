import { StyleSheet } from 'react-native'
import { colorsTheme } from '../colorsTheme'

export const containers = StyleSheet.create({
  main: {
    marginVertical: 40,
    marginHorizontal: 20,
    marginBottom: 20,
    height: '100%'
  },
  infoContainer: {
    marginVertical: 20
  },
  myFlightsView: {
    width: '100%',
    marginTop: 10
  },
  buttonContent: {
    backgroundColor: 'rgba(52, 52, 52, 0.0)',
    position: 'absolute',
    alignSelf: 'center',
    height: '90%',
    justifyContent: 'flex-end',
  }
})

export const texts = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colorsTheme.primaryColor
  }
})
