import { View } from 'react-native'
import BookingTitle from '../components/BookingTitle'
import PickerNum from './PikerNum'
import Ionicons from '@expo/vector-icons/Ionicons'
import { controls, containers } from '../styles/Components/passengers'

const Passengers = () => {
  return (
    <View style={containers.mainContainer}>
      <View>
        <BookingTitle text={'How many passengers?'} />
      </View>
      <View style={containers.pickerContainer}>
        <View style={containers.arrowLeftContainer}>
          <Ionicons
            name='caret-forward-outline'
            size={30}
            color='#5c6ef8'
          />
        </View>
        <View style={controls.picker}>
          <PickerNum />
        </View>
        <View style={containers.arrowRightContainer}>
          <Ionicons
            name='caret-back-outline'
            size={30}
            color='#5c6ef8'
          />
        </View>
      </View>
    </View>
  )
}

export default Passengers
