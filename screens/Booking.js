import { useState } from 'react'
import { Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { containers, graphics,controls } from '../styles/Screens/booking'
import BookingTitle from '../components/BookingTitle'
import FlightInfo from '../components/FlightInfo'
import CustomButtom from '../components/CustomButton'

const Booking = () => {
  return (
    <View style={containers.main}>
      <View style={containers.container}>
        <Ionicons
          name='chevron-back-outline'
          size={30}
          color='#5c6ef8'
          style={graphics.backIcon}
        />
        <FlightInfo />
        <BookingTitle text={'Where Are You Now?'} />
        <CustomButtom style={controls.button} text='Next' />
      </View>
    </View>
  )
}

export default Booking
