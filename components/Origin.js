import { View } from 'react-native'
import BookingTitle from '../components/BookingTitle'
import SelectMenu from './SelectMenu'

const Origin = () => {
  return (
    <View>
      <View>
        <BookingTitle text={'Where are you now?'} />
      </View>
      <SelectMenu/>
    </View>
  )
}

export default Origin
