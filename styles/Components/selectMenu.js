import { StyleSheet } from 'react-native'
import { ColorsTheme } from '../colorsTheme'

export const graphics = StyleSheet.create({})

export const texts = StyleSheet.create({
  textLocation: {
    color: 'grey'
  },
  countriesListText: {
    color: 'grey'
  }
})

export const controls = StyleSheet.create({
  countriesTouchable: {
    //backgroundColor:'red',
    borderBottomWidth: 1,
    borderColor: 'grey',
    margin: 2,
    height: 27
  }
})

export const containers = StyleSheet.create({
  selectContainer: {
    //backgroundColor:'blue',
    marginTop: 10,
    height: '24%',
    borderBottomWidth: 1,
    borderColor: 'grey',
    // alignItems:'center',
    justifyContent: 'center'
  },
  modalContainer: {
    backgroundColor: 'white',
    width: '85%',
    alignSelf: 'center',
    height: '60%'
  }
})
