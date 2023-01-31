import { TextInput, View, TouchableOpacity } from 'react-native'
import { graphics, controls, containers } from '../styles/Components/input'
import { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

export const CustomInput = ({ value, type, handleChange }) => {
  
  const [passwordVisible, setPasswordVisible] = useState(true)

  return (
    <View>
      {type === 'text' ? (
        <TextInput
          onChangeText={handleChange}
          name = 'firstName'
          value = {value}
          label = 'firstName'
          style = {
            value === '' || value === undefined
              ? [controls.inputInactive, controls.input]
              : [controls.inputActive, controls.input]
          }
        />
      ) : type === 'password' ? (
        <View style={containers.iconContainer}>
          <TextInput
            onChangeText={handleChange}
            name = 'firstName'
            value = {value}
            label = 'firstName'
            secureTextEntry = {passwordVisible}
            style = {
              value === ''|| value === undefined
                ? [controls.inputInactive, controls.input]
                : [controls.inputActive, controls.input]
            }
          />
          <TouchableOpacity 
          style={{width: 30, position: 'absolute'}}
          onPress={()=>setPasswordVisible(!passwordVisible)}>
            <Ionicons
              style = {value === ''||value === undefined ? [graphics.icon, graphics.iconInactive] : [graphics.icon, graphics.iconActive]}
              name = {passwordVisible ? 'eye-off' : 'eye'}
              size = {18}
            />
          </TouchableOpacity>
        </View>
      ) : ''}
    </View>
  )
}