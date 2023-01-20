import React from 'react'
import {
  Text,
  TouchableOpacity
} from 'react-native';
import { texts } from '../styles/UnderlinedStyle'

const CustomUnderlined = ({ text,color }) => {
  return (
    <TouchableOpacity>
      <Text
        style= {color === 'gray' ? texts.underlinedText : texts.underlinedTextPurple}
      >{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomUnderlined;
