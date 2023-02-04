import { TouchableOpacity, View, Text, Button, ScrollView } from 'react-native'
import MyFligths from '../components/MyFlights'
import { containers, texts } from '../styles/Screens/flights'
import store from '../redux/store'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect } from 'react'
import { createIconSetFromFontello } from '@expo/vector-icons'
import MyFlights from '../components/MyFlights/'

const Flights = () => {
  const navigation = useNavigation()

  return (
    <View style={containers.main}>
      <Text style={texts.title}>My Flights</Text>
      <Button
        title='CREATE NEW RESERVATION'
        onPress={() => navigation.navigate('Booking')}
      ></Button>

      <View>
        <MyFlights />
      </View>
    </View>
  )
}

export default Flights
