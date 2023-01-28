import { View } from 'react-native'
import BookingTitle from './BookingTitle'
import { AntDesign } from '@expo/vector-icons'
import { containers } from '../styles/Components/dateCalendar'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import { useState } from 'react'
import store from '../redux/store'
import { useSelector } from 'react-redux'
import moment from 'moment'

const DateCalendar = () => {

  const [daySelect, setDaySelect] = useState('')
  const _format = 'YYYY-MM-DD'
  const _today = moment().format(_format)
  const _maxDate = moment().add(12, 'months').format(_format)
  let markedDates = {
    [daySelect]: { selected: true, selectedColor: '#5c6ef8' },
  }

  const onDaySelect = (day) => {
    let selectedDay = moment(day.dateString).format(_format)
    setDaySelect(selectedDay)
    store.dispatch({
      type: 'ADD_DATE',
      payload: {
        date: daySelect
      }
    })
  }

  return (
    <View style={containers.mainContainer}>
      <BookingTitle text={'Select Date'} />
      <View style={containers.calendarContainer}>
        <Calendar
          initialDate={_today}
          minDate={_today}
          maxDate={_maxDate}
          renderArrow={(direction) =>
            direction == 'left' ?
              <AntDesign name="left" size={24} color="#5c6ef8" />
              :
              <AntDesign name="right" size={24} color="#5c6ef8" />}
          markedDates={markedDates}
          onDayPress={day => {
            onDaySelect(day)
          }}
          theme={{
            textMonthFontSize: 18,
            textMonthFontWeight: 'bold',
            calendarBackground: '#f3f2f3',
            textSectionTitleColor: '#000000',
            todayTextColor: '#5c6ef8',
            textDayHeaderFontWeight: 'bold',
          }}
        />
      </View>
    </View>
  )
}

export default DateCalendar
