import { TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { containers, graphics, controls } from '../styles/Screens/booking'
import FlightInfo from '../components/FlightInfo'
import CustomButtom from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import Passengers from '../components/Passengers'
import DateCalendar from '../components/DateCalendar'
import Origin from '../components/Origin'
import Destination from '../components/Destination'
import store from '../redux/store'
import { useSelector } from 'react-redux'
import BookingTitle from '../components/BookingTitle'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect } from 'react'


const Booking = () => {
  const navigation = useNavigation()
  const flightBooking = useSelector(state => state.flightInfo)

  const [parsedCurrentUser, setParsedCurrentUser] = useState(null)

  useEffect(() => {
    getCurrentUser()
  }, [])

  const getCurrentUser = async () => {
    try {
      const currentUser = await AsyncStorage.getItem('current_user')
      setParsedCurrentUser(JSON.parse(currentUser))
    } catch (e) {
      // error reading value
    }
  }
  


  const counter = 1

  const handleCreateReservation = () => {
    getCurrentUser()
    console.log("LACREACIONXDDDDD",parsedCurrentUser)
    flightBooking[0].user = parsedCurrentUser.email
    store.dispatch({
      type: 'CREATE_RESERVATION',
      payload: {
        reservation: flightBooking
      }
    })
    navigation.navigate('Flights')
  }

  return (
    <View style={containers.main}>
      <View style={containers.container}>
        <TouchableOpacity
          onPress={
            flightBooking[0].count === 0
              ? () => navigation.navigate('Flights')
              : () =>
                  store.dispatch({
                    type: 'MINUS_COUNT',
                    payload: {
                      counter: counter
                    }
                  })
          }
        >
          <Ionicons
            name='chevron-back-outline'
            size={30}
            color='#5c6ef8'
            style={graphics.backIcon}
          />
        </TouchableOpacity>

        <FlightInfo />

        {flightBooking[0].count === 0 ? (
          <Origin />
        ) : flightBooking[0].count === 1 ? (
          <Destination />
        ) : flightBooking[0].count === 2 ? (
          <DateCalendar />
        ) : flightBooking[0].count === 3 ? (
          <Passengers />
        ) : (
          <BookingTitle text='Your request was received' />
        )}

        {flightBooking[0].count === 4 ? (
          <CustomButtom
            style={controls.button}
            text='Finish'
            handlePress={handleCreateReservation}
          />
        ) : (
          <CustomButtom
            style={controls.button}
            text='Next'
            handlePress={() =>
              store.dispatch({
                type: 'PLUS_COUNT',
                payload: {
                  counter: counter
                }
              })
            }
          />
        )}
      </View>
    </View>
  )
}

export default Booking
