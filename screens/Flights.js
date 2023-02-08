import { View, Text, Button, TouchableOpacity } from 'react-native'
import MyFligths from '../components/MyFlights'
import { containers, texts } from '../styles/Screens/flights'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import { colorsTheme } from '../styles/colorsTheme'

const Flights = () => {
  const navigation = useNavigation()

  return (
    <View style={[containers.main, { display: 'flex', flex: 1, marginBottom: 20, }]}>
      <Text style={texts.title}>My Flights</Text>

      <View style={{ flex: 0.8, width: '100%', height: '100%', }}>
        <MyFligths />
      </View>

      <View style={{
        flex: 0.2,
        // backgroundColor:'blue', 
        justifyContent: 'flex-end',
      }}>

        <TouchableOpacity onPress={() => navigation.navigate('Booking')} >
          <AntDesign name='pluscircle' size={75} color={colorsTheme.primaryColor} style={{
            alignSelf: 'center',
          }} />
        </TouchableOpacity>
        
      </View>
    </View>
  )
}

export default Flights
