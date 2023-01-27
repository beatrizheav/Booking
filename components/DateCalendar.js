import { View } from 'react-native'
import BookingTitle from './BookingTitle'
import { AntDesign } from '@expo/vector-icons';
import { containers } from '../styles/Components/dateCalendar'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const DateCalendar = () => {
  return (
    <View style={containers.mainContainer}>
      <View>
        <BookingTitle text={'Select Date'} />
      </View>
      <Calendar
        initialDate={'2023-01-27'}
        minDate={'2023-01-27'}
        maxDate={'2024-01-27'}
        renderArrow={(direction) =>
          direction == 'left' ?
            <AntDesign name="left" size={24} color="#5c6ef8" />
            :
            <AntDesign name="right" size={24} color="#5c6ef8" />}
        theme={{
          textMonthFontSize: 17,
          textMonthFontWeight: 'bold',
          todayTextColor: '#5c6ef8',
          textDayFontWeight: 'bold',
          textDayFontWeight: '300',
        }}
      />
    </View>
  )
}

export default DateCalendar
