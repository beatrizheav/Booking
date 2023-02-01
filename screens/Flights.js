import { TouchableOpacity, View, Text } from 'react-native'
import FlightInfo from '../components/FlightInfo'
import { containers, texts } from '../styles/Screens/flights'

const Flights = () => {
  return (
    <View style={containers.main}>
      <Text style={texts.title}>My Flights</Text>
      <View>
        <FlightInfo style={containers.infoContainer}/>
      </View>
    </View>
  )
}

export default Flights