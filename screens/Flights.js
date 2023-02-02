import { TouchableOpacity, View, Text, Button } from 'react-native'
import FlightInfo from '../components/FlightInfo'
import { containers, texts } from '../styles/Screens/flights'
import store from '../redux/store'
import { useSelector } from 'react-redux'

const Flights = () => {
  const flightsList = useSelector(state => state.flightsList)
  console.log('flightsList_-__', flightsList[0])
  return (
    <View style={containers.main}>
      <Text style={texts.title}>My Flights</Text>
      <Button
        title='CLICKEAME MUCHAS VECES O SI NO NO SIRVO'
        onPress={() =>
          store.dispatch({
            type: 'GET_RESERVATION',
            payload: {
              hola: 'hola'
            }
          })
        }
      ></Button>
      <View>
        <FlightInfo style={containers.infoContainer} />
      </View>
      <View>
        {flightsList[0]?.map(flight => {
          return <Text>{flight.destinationCapital}</Text>
        })}
      </View>
    </View>
  )
}

export default Flights
