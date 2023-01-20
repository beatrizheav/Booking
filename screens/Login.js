import { useState } from 'react'
import {
    Text,
    View
} from 'react-native'
import { Formik } from 'formik'
import { CustomInput } from '../components/CustomInput'
import { controls, containers, texts } from '../styles/LoginStyle.js'
import CustomButton from '../components/CustomButton'
import CustomUnderlined from '../components/CustomUnderlined'

const Login = () => {
    const [isChecked, setChecked] = useState(false)
    const [isChecked2, setChecked2] = useState(false)
    const [inputText, setInputText] = useState('')

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
                                {isChecked && isChecked2 === true ?
                                    <CustomButton text='Sign In' disabled={false} icon={false} /> :
                                    <CustomButton text='Sign In' disabled={true} icon={false} />
                                }
                                <Text style={texts.accountText}>or</Text>
                                <CustomButton text='Sign In with Google' disabled={false} icon={true} /> 

                                <View style={containers.footerContainer}>
                                    <Text style={texts.accountText}>
                                        Don't you have an account?
                                    </Text>
                                    <CustomUnderlined text=' Sign up'
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
