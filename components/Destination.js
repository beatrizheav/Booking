import { View } from 'react-native'
import BookingTitle from '../components/BookingTitle'
import SelectMenu from './SelectMenu'

const Destination = () => {
  return (
    <View>
      <View>
        <BookingTitle text={'Where will you be flying to?'} />
      </View>
      <SelectMenu type='ADD_DESTINATION'/>
    </View>
  )
}

export default Destination
