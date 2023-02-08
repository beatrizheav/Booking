import { StyleSheet } from 'react-native'
import { colorsTheme } from '../colorsTheme'

export const controls = StyleSheet.create({
  check: {
    marginRight: 10
  }
})

export const containers = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginVertical: 25,
    padding: 16
  },
  buttonsContainer: {
    alignSelf: 'center',
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  checkContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  screenContainer: {
    marginTop: 20
  },
  underlinedTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center'
  
  },
  modal: {
    backgroundColor: `rgba(0, 0, 0, 0.5)`,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
   
  },
  messageModal: {
    backgroundColor: '#23232B',
    width: '27%',
    height: '20%',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    borderRadius:10
  },
  animation: {
    height: '70%',
    justifyContent: 'center'
  }
})

export const texts = StyleSheet.create({
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: colorsTheme.primaryColor
  },
  titlesText: {
    fontSize: 16,
    color: colorsTheme.gray,
    marginTop: 12
  },
  warningPassword: {
    color: colorsTheme.gray,
    fontSize: 11,
    marginTop: 10,
    marginBottom: 20
  },
  textCheck: {
    marginVertical: 10,
    color: colorsTheme.gray,
    fontSize: 15
  },
  accountText: {
    fontSize: 18,
    textAlign: 'center',
    color: colorsTheme.gray,
    marginVertical: 8
  },
  asterisk: {
    color: 'red',
    fontWeight: 'bold'
  },
  modalText: {
    color: colorsTheme.primaryColor,
    textAlign: 'center',
    paddingBottom:30,
    fontWeight:'bold'
  }
})