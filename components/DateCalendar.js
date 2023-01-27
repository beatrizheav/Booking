import { View } from 'react-native'
import BookingTitle from './BookingTitle'
import { AntDesign } from '@expo/vector-icons'
import { containers } from '../styles/Components/dateCalendar'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import { useState } from 'react'
import store from '../redux/store'
import { useSelector } from 'react-redux'

const DateCalendar = () => {

  const flightInfo = useSelector(state => state.flightInfo)
  const dateSelected = "'"+flightInfo[0].date+"'"
  console.log(dateSelected, "dateSelected")

  return (
    <View style={containers.mainContainer}>
      <BookingTitle text={'Select Date'} />
      <View style={containers.calendarContainer}>
        <Calendar
          initialDate={'2023-01-27'}
          minDate={'2023-01-27'}
          maxDate={'2024-01-27'}
          renderArrow={(direction) =>
            direction == 'left' ?
              <AntDesign name="left" size={24} color="#5c6ef8" />
              :
              <AntDesign name="right" size={24} color="#5c6ef8" />}
          markedDates={{
            '2023-01-28': { selected: true, selectedColor: '#5c6ef8' },
          }}
          onDayPress={day => {
            store.dispatch({
              type: 'ADD_DATE',
              payload: {
                date: day.dateString
              }
            })
          }}
          theme={{
            textMonthFontSize: 17,
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
