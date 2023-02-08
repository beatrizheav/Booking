import { useState } from 'react'
import {
  Text,
  View,
  ScrollView,
  Alert, Button,Linking,Modal,ActivityIndicator 
} from 'react-native'
import { Formik } from 'formik'
import Checkbox from 'expo-checkbox'
import { CustomInput } from '../components/CustomInput'
import { controls, containers, texts } from '../styles/Screens/login.js'
import CustomButton from '../components/CustomButton'
import CustomUnderlined from '../components/CustomUnderlined'
import { useNavigation } from "@react-navigation/native"
import store from '../redux/store'
import {useSelector} from 'react-redux'

const SignUp = () => {
  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false)
  const [isChecked2, setChecked2] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const userAttempt = useSelector(state => state.userInformation)

  const validate = (values) => {
    console.log("USERATTEMPT",userAttempt.state)
    if (values.name === '' || values.email === '' || values.password === '') {
      Alert.alert("Error", "You must fill all the fields to continue")
     
    }
  }

  const handleGoogle = async () => {
    Linking.openURL('https://tame-red-dugong.cyclic.app/auth/google')
    console.log('estoy en la GOOGLR signup')
    // try {
    //   const response = await axios.get(
    //     'https://tame-red-dugong.cyclic.app/auth/google'
    //   )
    //   console.log('responseGOOGLR:', response.data)
    // } catch (error) {
    //   console.log('ERROR', error)
    // }
  }


  return (
    <View style={containers.container}>
      <ScrollView>
        <Text style={texts.title}>Sign Up</Text>

        <Modal
        animationType='slide'
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          setIsVisible(!isVisible)
        }}
      >
        <View style={containers.modal}>
          <View style={containers.messageModal}>
            <View style={containers.animation}>
              <ActivityIndicator size={60} color='#5C6EF8' />
            </View>
            <Text style={texts.modalText}>Signing up...</Text>
          </View>
        </View>
      </Modal>


        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={values => {
            validate(values)
            store.dispatch({
              type: 'CREATE_USER',
              payload: {
                user: values
              }
            })
            setIsVisible(true)
            setTimeout(()=>{
              setIsVisible(false)
            },3000)
          }}
        >
          {({ handleChange, values, errors, handleSubmit }) => (
            <View style={containers.screenContainer}>
            
              <Text style={texts.titlesText}>Username</Text>
              <CustomInput
                handleChange={handleChange('name')}
                value={values.name}
                type='text'
              />

              <Text style={texts.titlesText}>Email *</Text>
              <CustomInput
                handleChange={handleChange('email')}
                value={values.email}
                type='text'
              />

              <Text style={texts.titlesText} type='text'>Password *</Text>
              <CustomInput
                handleChange={handleChange('password')}
                value={values.password}
                type='password'

              />
              {errors.password ? <Text>{errors.password}</Text> : <></>}
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
                {isChecked === true ?
                  <CustomButton text='Sign Up' disabled={false} icon={false} handlePress={handleSubmit} /> :
                  <CustomButton text='Sign Up' disabled={true} icon={false} handlePress={handleSubmit} />
                }
                <Text style={texts.accountText}>or</Text>
                <CustomButton text='Sign Up with Google' disabled={false} icon={true} handlePress={handleGoogle} />

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

export default SignUp
