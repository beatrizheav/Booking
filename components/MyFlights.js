import { Text, View } from 'react-native'
import { containers, texts, graphics } from '../styles/Components/flightInfo'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useSelector } from 'react-redux'

const MyFligths = () => {

  const flightsList = useSelector(state => state.flightsList)
  const userLogged = useSelector(state => state.userInformation)
  //   const flightBooking = useSelector(state => state.flightInfo)

  return (
    <View>
      {
        flightsList[0]?.map(flight => {
          return <View style={[containers.main, {borderBottomWidth: 1}]}>
            <View style={containers.infoContainer}>
              <View style={containers.placeContainerL}>
                <Text style={texts.cityText}>{flight.originCode}</Text>
                <Text style={texts.countryText}>{flight.originCountry}</Text>
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
                <Text style={texts.cityText}>{flight.destinationCode}</Text>
                <Text style={texts.countryText}>{flight.destinationCountry}</Text>
              </View>
            </View>
            <View style={[containers.datePassengersContainer, {marginBottom: 20, marginTop: 10}]}>
              <Text style={texts.dateText}>{flight.date}</Text>
              <Text style={texts.dateText}>{flight.passengers} passengers</Text>
            </View>
          </View>
        })
      }

    </View>
  )
}

export default MyFligths
