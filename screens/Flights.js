import { TouchableOpacity, View, Text, Button, ScrollView } from 'react-native'
import MyFligths from '../components/MyFlights'
import { containers, texts } from '../styles/Screens/flights'
import store from '../redux/store'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect } from 'react'
import { createIconSetFromFontello } from '@expo/vector-icons'

const Flights = () => {
  const navigation = useNavigation()
  const flightsList = useSelector(state => state.flightsList)
  const [parsedCurrentUser, setParsedCurrentUser] = useState(null)
  const [parsedCurrentUserFlights, setParsedCurrentUserFlights] = useState(null)

  useEffect(() => {
    getCurrentUser()
  }, [])

  const getCurrentUser = async () => {
    try {
      const currentUser = await AsyncStorage.getItem('current_user')
      console.log('CURRENT_USERaaaaaa', currentUser)
      setParsedCurrentUser(JSON.parse(currentUser))
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
      console.log('currentUserFlights', currentUserFlights[0])
      setParsedCurrentUserFlights(JSON.parse(currentUserFlights))
      console.log('estoy en yyyyyyyyyyyyyy', parsedCurrentUserFlights)
    } catch (e) {
      // error reading value
    }
  }

  const handlePress = () => {
    store.dispatch({
      type: 'GET_RESERVATION',
      payload: {
        user: parsedCurrentUser.email
      }
    })

    getCurrentUserFlights()
  }

  return (
    <View style={containers.main}>
      <Text style={texts.title}>My Flights</Text>
      <Button
        title='CREATE NEW RESERVATION'
        onPress={() => navigation.navigate('Booking')}
      ></Button>
      <Button title='VER MIS RESERVAS' onPress={handlePress}></Button>
      {/* <View>
        <FlightInfo style={containers.infoContainer} />
      </View> */}
      <View>
        {parsedCurrentUserFlights[0]?.map(flight => {
          return (
            <Text key={flight._id}>
              {flight.originCountry},{flight.destinationCountry}
            </Text>
          )
        })}
      </View>
    </View>
  )
}

export default Flights
