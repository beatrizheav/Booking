import { View, Text, TouchableOpacity } from 'react-native'
import MyFligths from '../components/MyFlights'
import { containers, texts } from '../styles/Screens/flights'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import { colorsTheme } from '../styles/colorsTheme'

const Flights = () => {
  const navigation = useNavigation()

  return (
    <View style={[containers.main, { marginBottom: 20 }]}>
      <Text style={texts.title}>My Flights</Text>

      <View style={{ width: '100%', marginTop: 10 }}>
        <MyFligths />
      </View>

      <View style={{
        backgroundColor: 'rgba(52, 52, 52, 0.0)', 
        position: 'absolute',
        alignSelf: 'center',
        height: '92%',
        justifyContent: 'flex-end',
      }}>

        <TouchableOpacity onPress={() => navigation.navigate('Booking')} >
          <AntDesign name='pluscircle' size={75} color={colorsTheme.primaryColor} />
        </TouchableOpacity>
        
      </View>
    </View>
  )
}

export default Flights
