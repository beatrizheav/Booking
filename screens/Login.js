import { useState, useEffect } from 'react'
import { Text, View, Alert, Button, Modal, ActivityIndicator } from 'react-native'
import { AppState, Linking } from 'react-native'
import { Formik } from 'formik'
import { CustomInput } from '../components/CustomInput'
import { controls, containers, texts } from '../styles/Screens/login.js'
import CustomButton from '../components/CustomButton'
import CustomUnderlined from '../components/CustomUnderlined'
import { useNavigation } from '@react-navigation/native'
import store from '../redux/store'
import axios from 'axios'


const Login = () => {
  const [appState, setAppState] = useState(AppState.currentState)
  const [inputText, setInputText] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const navigation = useNavigation()

  // useEffect(() => {
  //   AppState.addEventListener('change', handleAppStateChange)
  //   return () => {
  //     AppState.removeEventListener('change', handleAppStateChange)
  //   }
  // }, [])
  // console.log(appState, 'appStateFuera')
  // const handleAppStateChange = nextAppState => {
  //   console.log(nextAppState, 'nextAppState')
  //   setAppState(nextAppState)
  //   console.log(appState, 'appStateDentro')
  //   if (nextAppState === 'active') {
  //     // the app has returned to the foreground after the user logged in
  //     // you can perform any necessary actions here, such as fetching the user's updated profile
  //     alert('Successful login with Google')
  //   }
  // }

  const validate = values => {
    if (
      values.email === '' ||
      values.password === '' ||
      values.email === undefined ||
      values.password === undefined
    ) {
      Alert.alert('Error', 'You must fill all the fields to continue')
    }
  }

  const handleGoogle = async () => {
    Linking.openURL('https://tame-red-dugong.cyclic.app/auth/google')
    console.log('estoy en la GOOGLR')

    setTimeout(() => {
      axios
        .get('https://tame-red-dugong.cyclic.app/successful')
        .then(response => console.log('RESPONSEFRONT', response.data))
      console.log('estoy en la settiemour')
    }, 5000)

    // try {
    //   const response = await axios.get(
    //     'https://tame-red-dugong.cyclic.app/auth/google'
    //   )
    //   console.log('responseGOOGLR:', response.data)
    // } catch (error) {
    //   console.log('ERROR', error)
    // }

    // axios
    //   .get('https://tame-red-dugong.cyclic.app/auth/google/callback')
    //   .then(response => {
    //     const { redirect } = response.data
    //     Linking.openURL(redirect)
    //   })
    //   .catch(error => {
    //     console.error(error)
    //   })
  }

  return (
    <View style={containers.container}>
      <Text style={texts.title}>Login</Text>

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
            <Text style={texts.modalText}>Signing in...</Text>
          </View>
        </View>
      </Modal>

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => {

          validate(values)
          store.dispatch({
            type: 'LOGIN_USER',
            payload: {
              user: values
            }
          })
          setIsVisible(true)
          setTimeout(() => {
            setIsVisible(false)
          }, 20000)

        }}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <View style={containers.screenContainer}>
            <Text style={texts.titlesText}>Email *</Text>
            <CustomInput
              handleChange={handleChange('email')}
              value={values.email}
              type='text'
            />

            <Text style={texts.titlesText} type='text'>
              Password *
            </Text>
            <CustomInput
              handleChange={handleChange('password')}
              value={values.password}
              type='password'
            />
            <Text style={texts.warningPassword}>
              Use 8 or more characters with a mix of letters, numbers and
              symbols
            </Text>

            <View style={containers.buttonsContainer}>
              <CustomButton
                text='Sign In'
                disabled={false}
                icon={false}
                handlePress={handleSubmit}
              />
              <Text style={texts.accountText}>or</Text>
              <CustomButton
                text='Sign In with Google'
                disabled={false}
                icon={true}
                handlePress={handleGoogle}
              />

              <View style={containers.footerContainer}>
                <Text style={texts.accountText}>
                  Don't you have an account?
                </Text>
                <CustomUnderlined text='Signup' color='purple' />
              </View>
            </View>
          </View>
        )}
      </Formik>
    </View>
  )
}

export default Login
