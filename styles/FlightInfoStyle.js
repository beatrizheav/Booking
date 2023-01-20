import { StyleSheet } from 'react-native'
import { ColorsTheme } from './ColorsTheme'

export const containers = StyleSheet.create({
    main: {
        //backgroundColor:'yellow',
        width: '90%'
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
     
        paddingTop: '6%',
    },
    placeContainer: {
        display: 'flex',

    },
    placeContainerL: {
        justifyContent: 'flex-start',
        borderBottomWidth:10,
        borderColor:'gray',
        backgroundColor:'yellow',
    },
    placeContainerR: {
        justifyContent: 'flex-end',
        borderBottomWidth:1,
        borderColor:'gray',
        alignItems: 'flex-end',
    }
})

export const texts = StyleSheet.create({
    cityText: {
        fontSize: 25,
        fontWeight: 'bold'
    }, countryText: {
        color: 'grey'
    }
})

