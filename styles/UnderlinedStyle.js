import { StyleSheet } from 'react-native'
import { ColorsTheme } from './ColorsTheme'

export const texts = StyleSheet.create({
  underlinedText: {
    fontSize: 15,
    color: ColorsTheme.gray,
    textDecorationLine: 'underline'
  },
  underlinedTextPurple:{
    fontSize: 16,
    color: ColorsTheme.primaryColor,
    textDecorationLine: 'underline'
  }
})
