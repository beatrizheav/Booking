import { View } from 'react-native'
import BookingTitle from '../components/BookingTitle'
import PickerNum from './PikerNum'
import Ionicons from '@expo/vector-icons/Ionicons'

const Passengers = () => {
  return (
    <View style={{
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'column',
      // backgroundColor: 'blue'
    }}>
      <View>
        <BookingTitle text={'How many passengers?'} />
      </View>
      <View style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        // backgroundColor: 'red'
      }}>
        <View style={{
          flex: 0.3,
          justifyContent: 'center',
          // backgroundColor: 'yellow',
          alignItems: 'flex-end'
        }}>
          <Ionicons
            name='caret-forward-outline'
            size={30}
            color='#5c6ef8'
          />
        </View>
        <View style={{
          flex: 0.3,
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'pink'
        }}>
          <PickerNum />
        </View>
        <View style={{
          flex: 0.3,
          justifyContent: 'center',
          // backgroundColor: 'yellow',
        }}>
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
