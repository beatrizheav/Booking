import { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import { containers, texts, graphics } from '../styles/Components/flightInfo'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useSelector } from 'react-redux'

const FlightInfo = () => {
  const flightBooking = useSelector(state => state.flightInfo)
  console.log('flightBooking', flightBooking[0].destination.country)

  

  return (
    <View style={containers.main}>
      <View style={containers.infoContainer}>
        <View style={containers.placeContainerL}>
          <Text style={texts.cityText}>{flightBooking[0].destination.code}</Text>
          <Text style={texts.countryText}>{flightBooking[0].destination.country}</Text>
        </View>
        <View style={containers.iconContainer}>
          <Ionicons
            name='airplane'
            size={24}
            color='#5c6ef8'
            style={graphics.icon}
          />
        </View>
        <View style={containers.placeContainerR}>
          <Text style={texts.cityText}>AMS</Text>
          <Text style={texts.countryText}>Netherlands</Text>
        </View>
      </View>
      <View style={containers.datePassengersContainer}>
        <Text style={texts.dateText}>September 3, 2020</Text>
        <Text style={texts.dateText}>2 passengers</Text>
      </View>
    </View>
  )
}

export default FlightInfo
