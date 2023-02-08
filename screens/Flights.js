import { View, Text, TouchableOpacity } from 'react-native'
import MyFligths from '../components/MyFlights'
import { containers, texts } from '../styles/Screens/flights'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import { colorsTheme } from '../styles/colorsTheme'
import { graphics } from '../styles/Screens/booking'
import Ionicons from '@expo/vector-icons/Ionicons'

const Flights = () => {
  const navigation = useNavigation()

  return (
    <View style={containers.main}>
      <TouchableOpacity onPress={ () =>
        navigation.navigate('Login')
      }>
        <Ionicons
          name='chevron-back-outline'
          size={30}
          color='#5c6ef8'
          style={graphics.backIcon}
        />
      </TouchableOpacity>
      <Text style={texts.title}>My Flights</Text>

      <View style={containers.myFlightsView}>
        <MyFligths />
      </View>

      <View style={containers.buttonContent}>

        <TouchableOpacity onPress={() => navigation.navigate('Booking')} >
          <AntDesign name='pluscircle' size={75} color={colorsTheme.primaryColor} />
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Flights
