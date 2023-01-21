import { StyleSheet } from 'react-native'
import { ColorsTheme } from '../colorsTheme'

export const containers = StyleSheet.create({
  main: {
    flex: 1,
    //backgroundColor: 'red',
    marginTop: 20,
    padding: 10
  },
  container: {
    //backgroundColor: 'blue',
    flex: 1,
    width: '90%',
    alignSelf: 'center'
  },
  backIcon: {
    color: ColorsTheme.primaryColor
  }
})

export const graphics = StyleSheet.create({
  backIcon: {
    color: ColorsTheme.primaryColor,
    //backgroundColor: 'black',
    width: '10%',

  }
})


export const controls = StyleSheet.create({
    button: {
      //color: ColorsTheme.primaryColor,
      //backgroundColor: 'black',
      //width: '10%',
      alignSelf:'flex-end'
  
    }
  })
  
