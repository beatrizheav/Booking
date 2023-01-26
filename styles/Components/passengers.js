import { StyleSheet } from 'react-native'

export const controls = StyleSheet.create({
    picker: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export const containers = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    pickerContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    arrowLeftContainer: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    arrowRightContainer: {
        flex: 0.3,
        justifyContent: 'center',
    }
})
