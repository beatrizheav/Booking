import { Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { buttons, texts, graphics, containers } from '../styles/Components/button.js'
import { useNavigation } from "@react-navigation/native";

const CustomButton = ({ text, disabled, icon }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={disabled ? [containers.main, buttons.button, buttons.buttonGray] : [containers.main, buttons.button, buttons.buttonPurple]}
      disabled={disabled}
      onPress={() =>
        navigation.navigate('Booking')
      }
    >
      {icon ?
        <Image
          source={require('../assets/google.png')}
          style={graphics.icon}
        /> : ''}
      <Text style={texts.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton;
