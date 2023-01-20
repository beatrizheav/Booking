import {
  Text,
  View
} from 'react-native'
import { texts } from '../styles/BookingTitleStyle'

const BookingTitle = ({text}) => {
  return(
      <Text style={texts.title}>{text}</Text>
  )
}

export default BookingTitle;
