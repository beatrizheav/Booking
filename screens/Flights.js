import { TouchableOpacity, View, Text, Button } from 'react-native'
import FlightInfo from '../components/FlightInfo'
import { containers, texts } from '../styles/Screens/flights'
import store from '../redux/store'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const Flights = () => {
  const navigation = useNavigation()
  const flightsList = useSelector(state => state.flightsList)
  const userLogged = useSelector(state => state.userInformation)

  console.log('flightsList_-__', flightsList[0])
  console.log('userLogged-__', userLogged.email)
  return (
    <View style={containers.main}>
      <Text style={texts.title}>My Flights</Text>
      <Button
        title='CREATE NEW RESERVATION'
        onPress={() => navigation.navigate('Booking')}
      ></Button>
      <Button
        title='VER MIS RESERVAS'
        onPress={() =>
          store.dispatch({
            type: 'GET_RESERVATION',
            payload: {
              user: userLogged.email
            }
          })
        }
      ></Button>
      {/* <View>
        <FlightInfo style={containers.infoContainer} />
      </View> */}
      <View>
        {flightsList[0]?.map(flight => {
          return <Text key={flight._id}>{flight.originCountry},{flight.destinationCountry}</Text>
        })} 
      </View>
    </View>
  )
}

export default Flights
