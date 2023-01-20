import { TextInput, View, TouchableOpacity } from 'react-native'
import { graphics, controls, containers } from '../styles/InputStyle'
import { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

export const CustomInput = ({ values, type }) => {
  const [inputText, setInputText] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false)

  return (
    <View>
      {type === 'text' ? (
        <TextInput
          onChangeText={value => setInputText(value)}
          name = 'firstName'
          value = {values}
          label = 'firstName'
          style = {
            inputText === ''
              ? [controls.inputInactive, controls.input]
              : [controls.inputActive, controls.input]
          }
        />
      ) : type === 'password' ? (
        <View style={containers.iconContainer}>
          <TextInput
            onChangeText={value => setInputText(value)}
            name = 'firstName'
            value = {values}
            label = 'firstName'
            secureTextEntry = {passwordVisible}
            style = {
              inputText === ''
                ? [controls.inputInactive, controls.input]
                : [controls.inputActive, controls.input]
            }
          />
          <TouchableOpacity 
          style={{width: 30, position: 'absolute'}}
          onPress={()=>setPasswordVisible(!passwordVisible)}>
            <Ionicons
              style = {inputText === '' ? [graphics.icon, graphics.iconInactive] : [graphics.icon, graphics.iconActive]}
              name = {passwordVisible ? 'eye-off' : 'eye'}
              size = {18}
            />
          </TouchableOpacity>
        </View>
      ) : ''}
    </View>
  )
}
