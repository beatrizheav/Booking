import { useState } from 'react'
import {
  Text,
  View,
  ScrollView,
} from 'react-native'
import { Formik } from 'formik'
import Checkbox from 'expo-checkbox'
import { CustomInput } from '../components/CustomInput'
import { controls, containers, texts } from '../styles/LoginStyle.js/index.js'
import CustomButton from '../components/CustomButton'
import CustomUnderlined from '../components/CustomUnderlined'

export default function App() {
  const [isChecked, setChecked] = useState(false)
  const [isChecked2, setChecked2] = useState(false)
  const [inputText, setInputText] = useState('')

  return (
    <View style={containers.container}>
      <ScrollView>
        <Text style={texts.title}>Sign Up</Text>
        <Formik
          onSubmit={values => {
            validate(values)
            Keyboard.dismiss()
          }}
        >
          {({ handleChange, values, errors }) => (
            <View style={containers.screenContainer}>

              <Text style={texts.titlesText}>First Name</Text>
              <CustomInput
                handleChange={handleChange}
                inputText={inputText}
                values={values}
                type='text'
              />

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

              <View style={containers.checkContainer}>
                <Checkbox
                  value={isChecked}
                  onValueChange={setChecked}
                  color={isChecked ? '#4630EB' : undefined}
                  style={controls.check}
                />
                <View style={containers.underlinedTextContainer}>
                  <Text style={texts.textCheck}>I agree to the </Text>
                  <CustomUnderlined text='Terms' color='gray' />
                  <Text style={texts.textCheck}> and </Text>
                  <CustomUnderlined text=' Privacy Policy.' color='gray' />
                  <Text style={texts.asterisk}> *</Text>
                </View>
              </View>

              <View style={containers.checkContainer}>
                <Checkbox
                  value={isChecked2}
                  onValueChange={setChecked2}
                  color={isChecked2 ? '#4630EB' : undefined}
                  style={controls.check}
                />
                <Text style={texts.textCheck}>
                  Suscribe for select product updates
                </Text>
              </View>

              <View style={containers.buttonsContainer}>
                {isChecked && isChecked2 === true ?
                  <CustomButton text='Sign Up' disabled={false} icon={false} /> :
                  <CustomButton text='Sign Up' disabled={true} icon={false} />
                }
                <Text style={texts.accountText}>or</Text>
                {isChecked && isChecked2 === true ?
                  <CustomButton text='Sign Up with Google' disabled={false} icon={true} /> :
                  <CustomButton text='Sign Up with Google' disabled={true} icon={true} />
                }

                <View style={containers.footerContainer}>
                  <Text style={texts.accountText}>
                    Already have an account?{' '}
                  </Text>
                  <CustomUnderlined text='Login'
                    color='purple'
                  />
                </View>
              </View>

            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  )
}
