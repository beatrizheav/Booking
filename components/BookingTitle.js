import {
  Text,
} from 'react-native'
import { texts } from '../styles/Components/bookingTitle'

const BookingTitle = ({text}) => {
  return(
      <Text style={texts.title}>{text}</Text>
  )
}

export default BookingTitle;
