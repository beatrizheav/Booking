import React from 'react'
import {
  Text,
  TouchableOpacity
} from 'react-native';
import { texts } from '../styles/Components/underlined'
import { useNavigation } from "@react-navigation/native";

const CustomUnderlined = ({ text, color}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(text)
      }>
      <Text
        style={color === 'gray' ? texts.underlinedText : texts.underlinedTextPurple}
      >{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomUnderlined;
