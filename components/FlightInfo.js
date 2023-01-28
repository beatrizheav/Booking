import { Text, View } from 'react-native'
import { containers, texts, graphics } from '../styles/Components/flightInfo'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useSelector } from 'react-redux'

const FlightInfo = () => {
  const flightBooking = useSelector(state => state.flightInfo)

  return (
    <View>
      {flightBooking[0].origin.country === '' ? ('') : (
        <View style={containers.main}>
          <View style={containers.infoContainer}>
            <View style={containers.placeContainerL}>
              <Text style={texts.cityText}>{flightBooking[0].origin.code}</Text>
              <Text style={texts.countryText}>{flightBooking[0].origin.country}</Text>
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
              <Text style={texts.cityText}>{flightBooking[0].destination.country === '' ? '' : (flightBooking[0].destination.code)}</Text>
              <Text style={texts.countryText}>{flightBooking[0].destination.country === '' ? '' : (flightBooking[0].destination.country)}</Text>
            </View>
          </View>
          <View style={containers.datePassengersContainer}>
            <Text style={texts.dateText}>{flightBooking[0].date}</Text>
            {flightBooking[0].passengers === '' ? ('') : (
              <Text style={texts.dateText}>{flightBooking[0].passengers} passengers</Text>
            )}
          </View>
        </View>
      )
      }
    </View>
  )
}

export default FlightInfo
