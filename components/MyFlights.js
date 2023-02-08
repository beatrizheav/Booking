import { Text, View, Button, ScrollView, Alert } from 'react-native'
import { containers, texts, graphics } from '../styles/Components/flightInfo'
import Ionicons from '@expo/vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect } from 'react'
import store from '../redux/store'
import CustomButton from './CustomButton'

const MyFligths = () => {
  const [parsedCurrentUser, setParsedCurrentUser] = useState(null)
  const [parsedCurrentUserFlights, setParsedCurrentUserFlights] = useState(null)
  const [flights, setFlights] = useState(vuelos)
  let vuelos

  useEffect(() => {
    getCurrentUser()
  }, [])

  const getCurrentUser = async () => {
    try {
      const currentUser = await AsyncStorage.getItem('current_user')
      console.log('CURRENT_USER____', JSON.parse(currentUser))
      const variable = JSON.parse(currentUser)
      console.log('variable', variable.email)
      //setParsedCurrentUser(prev=>JSON.parse(currentUser))
      // console.log("hola",parsedCurrentUser)
      store.dispatch({
        type: 'GET_RESERVATION',
        payload: {
          user: variable.email
        }
      })
    } catch (e) {
      // error reading value
    }
  }


  const getCurrentUserFlights = async () => {
    console.log('ESTOY EN FUNC')
    try {
      const currentUserFlights = await AsyncStorage.getItem(
        'current_user_flights'
      )
      let flights2 = JSON.parse(currentUserFlights)

      // console.log('FLIGHTS', flights2)
      return flights2
    } catch (e) {
      // error reading value
    }
  }

  const handlePress = () => {
    getCurrentUserFlights().then(data => {
      vuelos = data[0]

      console.log('vuelos', vuelos)
      setFlights(prev => vuelos)
      // console.log('flights', flights)
    })
  }

  return (
    <View style={containers.master}>
      <ScrollView >
        <CustomButton text='Ver mis vuelos' handlePress={handlePress}/>

        {flights?.map(flight => {
          return (
            <View key={flight._id} style={containers.main}>
              <View style={containers.infoContainer}>
                <View style={containers.placeContainerL}>
                  <Text style={texts.cityText}>{flight.originCode}</Text>
                  <Text style={texts.countryText}>
                    {flight.originCountry}
                  </Text>
                </View>
                <View style={containers.iconContainer}>
                  <Ionicons
                    name='airplane'
                    size={24}
                    color='#5c6ef8'
                    style={graphics.icon}
                  />
                </View>
                <View style={containers.placeContainerR}>
                  <Text style={texts.cityText}>
                    {flight.destinationCode}
                  </Text>
                  <Text style={texts.countryText}>
                    {flight.destinationCountry}
                  </Text>
                </View>
              </View>
              <View
                style={containers.datePassengersContainer}
              >
                <Text style={texts.dateText}>{flight.date}</Text>
                <Text style={texts.dateText}>
                  {flight.passengers} passengers
                </Text>
              </View>
            </View>
          )
        })
        }
      </ScrollView>
    </View>
  )
}

export default MyFligths
