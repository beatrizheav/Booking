import { StyleSheet } from 'react-native'
import { colorsTheme } from '../colorsTheme'

export const graphics = StyleSheet.create({})

export const texts = StyleSheet.create({
  textLocation: {
    color: 'grey'
  },
  countriesListText: {
    color: 'grey',
    marginLeft:10
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
    marginTop: 10,
    height: '24%',
    borderBottomWidth: 1,
    borderColor: 'grey',
    // alignItems:'center',
    justifyContent: 'center'
  },
  modalContainer: {
    backgroundColor: '#E5E7EB',
    width: '85%',
    alignSelf: 'center',
    height: '60%',
    position:'absolute',
    marginTop:'53%',
    borderRadius:10,
  },
  modalMainContainer: {
    //backgroundColor: 'red',
    flex: 1,
    position: 'relative'
  }
})
