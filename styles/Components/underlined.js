import { StyleSheet } from 'react-native'
import { colorsTheme } from '../colorsTheme'

export const texts = StyleSheet.create({
  underlinedText: {
    fontSize: 15,
    color: colorsTheme.gray,
    textDecorationLine: 'underline'
  },
  underlinedTextPurple:{
    fontSize: 16,
    color: colorsTheme.primaryColor,
    textDecorationLine: 'underline'
  }
})
