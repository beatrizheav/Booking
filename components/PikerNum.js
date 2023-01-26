import React from 'react'
import WheelPickerExpo from 'react-native-wheel-picker-expo'

const CITIES = '1,2,3,4,5,6,7,8,9'.split(',')

const PickerNum = () => {
  return (
      <WheelPickerExpo
        height={300}
        width={100}
        initialSelectedIndex={0}
        items={CITIES.map(name => ({ label: name, value: '' }))}
      // onChange={({ item }) => setCity(item.label)}
      />
  )
}

export default PickerNum
