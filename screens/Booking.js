import { useState } from 'react'
import {
    Text,
    View
} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { containers, backIcon } from '../styles/BookingStyle'
import BookingTitle from '../components/BookingTitle'
import FlightInfo from '../components/FlightInfo'


const Booking = () => {
    return (
        <View style={containers.container}>
            <Ionicons name="chevron-back-outline" size={30} color='#5c6ef8' />
            <FlightInfo/>
            <BookingTitle text={'Where Are You Now?'} />
            
        </View>
    )
}

export default Booking;
