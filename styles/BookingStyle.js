import { StyleSheet } from 'react-native'
import { ColorsTheme } from './ColorsTheme'

export const containers = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        // paddingHorizontal: 20,
        // marginVertical: 25,
        // paddingLeft: 26
    },
    backIcon: {
        color: ColorsTheme.primaryColor
    }
})