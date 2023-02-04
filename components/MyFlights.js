import { Text, View, Button, ScrollView } from 'react-native'
import { containers, texts, graphics } from '../styles/Components/flightInfo'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect } from 'react'
import store from '../redux/store'
const MyFligths = () => {
  const [parsedCurrentUser, setParsedCurrentUser] = useState(null)
  const [parsedCurrentUserFlights, setParsedCurrentUserFlights] = useState(null)
 
  const vuelos = []
  useEffect(() => {
    getCurrentUser()
  }, [])

  const getCurrentUser = async () => {
    try {
      const currentUser = await AsyncStorage.getItem('current_user')
      console.log('CURRENT_USERaaaaaa', currentUser)
      setParsedCurrentUser(JSON.parse(currentUser))
      store.dispatch({
        type: 'GET_RESERVATION',
        payload: {
          user: parsedCurrentUser.email
        }
      })
      getCurrentUserFlights()
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
      // const flattened = currentUserFlights.flatMap(num => num);

      setParsedCurrentUserFlights(JSON.parse(currentUserFlights))
      console.log('currentUserFlightsQQQQ', parsedCurrentUserFlights[0])

    
      parsedCurrentUserFlights[0].map(m => vuelos.push(m))
      console.log(vuelos, 'vueloe')
    } catch (e) {
      // error reading value
    }
  }

  const handlePress = async () => {
    getCurrentUserFlights()
  }

  return (
    <View>
      <ScrollView>
        <Button title='CLickme' onPress={handlePress}></Button>
        {vuelos?.map(flight => {
          return (
            <View style={[containers.main, { borderBottomWidth: 1 }]}>
              <View style={containers.infoContainer}>
                <View style={containers.placeContainerL}>
                  <Text style={texts.cityText}>{flight.originCode}</Text>
                  <Text style={texts.countryText}>{flight.originCountry}</Text>
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
                  <Text style={texts.cityText}>{flight.destinationCode}</Text>
                  <Text style={texts.countryText}>
                    {flight.destinationCountry}
                  </Text>
                </View>
              </View>
              <View
                style={[
                  containers.datePassengersContainer,
                  { marginBottom: 20, marginTop: 10 }
                ]}
              >
                <Text style={texts.dateText}>{flight.date}</Text>
                <Text style={texts.dateText}>
                  {flight.passengers} passengers
                </Text>
              </View>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default MyFligths
