import { StyleSheet } from 'react-native'
import { colorsTheme } from '../colorsTheme'

export const containers = StyleSheet.create({
    main: {
       // backgroundColor:'yellow',
       // width: '85%',
        alignSelf:'center'
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
     
        //paddingTop: '6%',
    },
    placeContainer: {
        display: 'flex',
        

    },
    placeContainerL: {
        justifyContent: 'flex-start',
        borderBottomWidth:1,
        borderColor:'gray',
        width:'50%'
        //backgroundColor:'yellow',
    },
    placeContainerR: {
        justifyContent: 'flex-end',
        borderBottomWidth:1,
        borderColor:'gray',
        alignItems: 'flex-end',
        width:'50%'
    },
    iconContainer:{
        backgrondColor:'red',   
        height:30,
        zIndex:1

    },
    datePassengersContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    }
})

export const texts = StyleSheet.create({
    cityText: {
        fontSize: 23,
        fontWeight: 'bold',
        marginTop:10
    }, countryText: {
        color: 'grey',
        marginTop:5,
        marginBottom:5
    },
    dateText:{
        marginTop:4,
        fontSize: 13,
        fontWeight: 'bold',
    }
})

export const graphics = StyleSheet.create({
    icon: {
       // backgroundColor:'red',
        position:'absolute',
        alignSelf:'center',
       
    }
})