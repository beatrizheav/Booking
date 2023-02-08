import { StyleSheet } from 'react-native'
import { colorsTheme } from '../colorsTheme'

export const containers = StyleSheet.create({
  master :{
    paddingBottom: 100
  },
  main: {
    alignSelf: 'center',
    borderBottomWidth: 1
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //backgroundColor: 'blue',
    //paddingTop: '6%',
  },
  placeContainer: {
    display: 'flex',


  },
  placeContainerL: {
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderColor: '#CECECE',
    width: '50%',
    //backgroundColor:'yellow',
  },
  placeContainerR: {
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
    borderColor: '#CECECE',
    alignItems: 'flex-end',
    width: '50%'
  },
  iconContainer: {
    backgrondColor: 'red',
    height: 30,
    zIndex: 1

  },
  datePassengersContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 10
  }
})

export const texts = StyleSheet.create({
  cityText: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 10
  }, countryText: {
    color: 'grey',
    marginTop: 5,
    marginBottom: 5
  },
  dateText: {
    marginTop: 4,
    fontSize: 13,
    fontWeight: 'bold',
  }
})

export const graphics = StyleSheet.create({
  icon: {
    // backgroundColor:'red',
    position: 'absolute',
    alignSelf: 'center',

  }
})