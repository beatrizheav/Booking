import React from 'react'
import WheelPickerExpo from 'react-native-wheel-picker-expo'
import store from '../redux/store'

const passengers = '1,2,3,4,5,6,7,8,9'.split(',')

const PickerNum = () => {
  return (
    <WheelPickerExpo
      height={300}
      width={100}
      initialSelectedIndex={0}
      items={passengers.map(name => ({ label: name, value: '' }))}
      onChange={({ item }) => {
        store.dispatch({
          type: 'ADD_PASSENGERS',
          payload: {
            passengers: item.label
          }
        })
      }}
    />
  )
}

export default PickerNum
