import { View } from 'react-native'
import BookingTitle from '../components/BookingTitle'
import SelectMenu from './SelectMenu'

const Origin = () => {
  return (
    <View>
      <View>
        <BookingTitle text={'Where are you now?'} />
      </View>
      <SelectMenu type='ADD_ORIGIN'/>
    </View>
  )
}

export default Origin
