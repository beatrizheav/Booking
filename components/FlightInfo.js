import { useState } from 'react'
import {
    Text,
    View
} from 'react-native'
import { containers, texts } from '../styles/FlightInfoStyle'
import Ionicons from '@expo/vector-icons/Ionicons'

const FlightInfo = () => {
    return (
        <View style={containers.main}>
            <View style={containers.infoContainer}>
                <View style={containers.placeContainerL}>
                    <Text style={texts.cityText}>BEG</Text>
                    <Text style={texts.countryText}>Serbia</Text>
                </View>

                <Ionicons 
                name="airplane" size={24} color="#5c6ef8" 
               
                />

                <View style={containers.placeContainerR}>
                    <Text style={texts.cityText}>AMS</Text>
                    <Text style={texts.countryText}>Netherlands</Text>
                </View>
            </View>
            
        </View>
    )
}

export default FlightInfo;
