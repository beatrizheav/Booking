import { TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { containers, graphics, controls } from '../styles/Screens/booking'
import FlightInfo from '../components/FlightInfo'
import CustomButtom from '../components/CustomButton'
import { useNavigation } from "@react-navigation/native";
import Passengers from '../components/Passengers'
import Origin from '../components/Origin'
import Destination from '../components/Destination'

const Booking = () => {
  const navigation = useNavigation();
  return (

    <View style={containers.main}>
      <View style={containers.container}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Login')
          }>
          <Ionicons
            name='chevron-back-outline'
            size={30}
            color='#5c6ef8'
            style={graphics.backIcon}
          />
        </TouchableOpacity>
        <FlightInfo />
        <Origin />
        <Destination />
        <Passengers/>
        <CustomButtom style={controls.button} text='Next' />
      </View>
    </View>
  )
}

export default Booking
