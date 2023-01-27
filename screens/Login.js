import { useState } from 'react'
import {
  Text,
  View
} from 'react-native'
import { Formik } from 'formik'
import { CustomInput } from '../components/CustomInput'
import { controls, containers, texts } from '../styles/Screens/login.js'
import CustomButton from '../components/CustomButton'
import CustomUnderlined from '../components/CustomUnderlined'
import { useNavigation } from "@react-navigation/native";


const Login = () => {
  const [inputText, setInputText] = useState('')
  const navigation = useNavigation();

  return (
    <View style={containers.container}>
      <Text style={texts.title}>Login</Text>
      <Formik
        onSubmit={values => {
          validate(values)
          Keyboard.dismiss()
        }}
      >
        {({ handleChange, values, errors }) => (
          <View style={containers.screenContainer}>

            <Text style={texts.titlesText}>Email *</Text>
            <CustomInput
              handleChange={handleChange}
              values={values}
              type='text'
              onChangeText={value => setInputText(value)}
            />

            <Text style={texts.titlesText} type='text'>Password *</Text>
            <CustomInput
              handleChange={handleChange}
              values={values}
              type='password'
              onChangeText={value => setInputText(value)}
            />
            <Text style={texts.warningPassword}>
              Use 8 or more characters with a mix of letters, numbers and symbols
            </Text>

            <View style={containers.buttonsContainer}>
              <CustomButton text='Sign In' disabled={false} icon={false} handlePress={()=>navigation.navigate('Booking')}/>
              <Text style={texts.accountText}>or</Text>
              <CustomButton text='Sign In with Google' disabled={false} icon={true} />

              <View style={containers.footerContainer}>
                <Text style={texts.accountText}>
                  Don't you have an account?
                </Text>
                <CustomUnderlined text='Signup'
                  color='purple'
                />
              </View>
            </View>

          </View>
        )}
      </Formik>
    </View>
  )
}

export default Login;
