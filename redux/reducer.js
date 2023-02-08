import axios from 'axios'
import { navigationRef } from '../navigation/navigationRef'

import AsyncStorage from '@react-native-async-storage/async-storage'

export const addDestination = {
  type: 'ADD_DESTINATION'
}

export const addOrigin = {
  type: 'ADD_ORIGIN'
}

export const addDate = {
  type: 'ADD_DATE'
}

export const addPassengers = {
  type: 'ADD_PASSENGERS'
}

export const plusCount = {
  type: 'PLUS_COUNT'
}

export const minusCount = {
  type: 'MINUS_COUNT'
}

export const createUser = {
  type: 'CREATE_USER'
}

export const loginUser = {
  type: 'LOGIN_USER'
}

export const logoutUser = {
  type: 'LOGOUT_USER'
}

export const createReservation = {
  type: 'CREATE_RESERVATION'
}

export const getReservation = {
  type: 'GET_RESERVATION'
}

export const updateUserLogged = {
  type: 'UPDATE_CURRENT_LOGED_USER'
}

export const updateUserFlights = {
  type: 'UPDATE_USER_FLIGHTS'
}

const initialState = [
  {
    destination: {
      country: '',
      capital: '',
      code: ''
    },
    origin: {
      country: '',
      capital: '',
      code: ''
    },
    date: '',
    passengers: '',
    count: 0,
    user: ''
  }
]

const user = [
  {
    name: '',
    email: '',
    password: '',
    status: '',
    message: ''
  }
]

const storeData = async (data, key) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data))
  } catch (error) {
    console.error('Error storing data', error)
  }
}

export const userInformationReducer = (state = user, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      console.log('estoy en el reducer signup')
      const newStateUser = [...state]
      newStateUser[0].name = action.payload.user.name
      newStateUser[0].email = action.payload.user.email
      newStateUser[0].password = action.payload.user.password
      const objectToCreate = {
        name: action.payload.user.name,
        email: action.payload.user.email,
        password: action.payload.user.password
      }

      async function createUserInDB (objectToCreate) {
        console.log('estoy en la funcion')
        try {
          const response = await axios.post(
            'https://tame-red-dugong.cyclic.app/api/users',
            objectToCreate
          )

          if (response.data.status === 'OK') {
            console.log(
              response.data.message,
              'MESSAGE',
              newStateUser[0].status
            )
            alert(response.data.message)
            navigationRef.navigate('Login')
          } else {
            setTimeout(()=>{
              alert(response.data.message)
            },3000)
         
           
          }
        } catch (error) {
          console.log('ERROR', error)
        }
      }
      createUserInDB(objectToCreate)
      return newStateUser

    case 'LOGIN_USER':
      let currentLogedUser = [...state]

      const email = action.payload.user.email
      const objectToSearch = {
        email: action.payload.user.email,
        password: action.payload.user.password
      }

      async function searchUserInDB (objectToSearch) {
        try {
          const response = await axios.post(
            'https://tame-red-dugong.cyclic.app/api/users/login',
            objectToSearch
          )

          if (response.data.status === 'FAILED') {
            alert(response.data.message)
          } else if (response.data.status === 'OK') {
            const activeUser = response.data.user
            const activeUserString = JSON.stringify(activeUser)

            AsyncStorage.setItem('current_user', activeUserString)
              .then(() => {
                return AsyncStorage.getItem('current_user')
              })
              .then(currentUserString => {
                navigationRef.navigate('Flights')
              })
              .catch(error => {
                console.error(error)
              })
          }
        } catch (error) {
          console.log('ERROR', error)
        }
      }
      searchUserInDB(objectToSearch)
      return state

    default:
      return state
  }
}

export const flightInformationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ORIGIN':
      const newState = [...state]
      newState[0].origin.country = action.payload.country
      newState[0].origin.capital = action.payload.capital
      newState[0].origin.code = action.payload.code
      return newState

    case 'ADD_DESTINATION':
      const newStateDestination = [...state]
      newStateDestination[0].destination.country = action.payload.country
      newStateDestination[0].destination.capital = action.payload.capital
      newStateDestination[0].destination.code = action.payload.code
      return newStateDestination

    case 'ADD_DATE':
      const newStateDate = [...state]
      newStateDate[0].date = action.payload.date
      return newStateDate

    case 'ADD_PASSENGERS':
      const newStatePassengers = [...state]
      newStatePassengers[0].passengers = action.payload.passengers
      return newStatePassengers

    case 'PLUS_COUNT':
      const newStateCount = [...state]
      newStateCount[0].count += action.payload.counter
      return newStateCount

    case 'MINUS_COUNT':
      const newStateMinusCount = [...state]
      newStateMinusCount[0].count -= action.payload.counter
      return newStateMinusCount

    case 'CREATE_RESERVATION':
      const reservationToCreate = action.payload.reservation
      console.log('reservationToCreate', reservationToCreate)

      async function createReservation (reservationToCreate) {
        try {
          const response = await axios.post(
            'https://tame-red-dugong.cyclic.app/api/users/reservations',
            reservationToCreate
          )

          if (response.data.status) {
            alert(response.data.message)
          }
        } catch (error) {
          console.log('ERROR', error)
        }
      }

      createReservation(reservationToCreate)
      return reservationToCreate

    default:
      return state
  }
}

const flightList = []
export const flightsReducer = (state = flightList, action) => {
  switch (action.type) {
    case 'GET_RESERVATION':
      console.log("Get reservations")
      const flightsState = []

      const user = { email: action.payload.user }
      console.log('action.payload.user', action.payload.user)
     

      async function searchReservations (user) {
        try {
          const response = await axios.post(
            'https://tame-red-dugong.cyclic.app/api/users/reservations/get',
            user
          )

          // flightsState?.map(flight=>console.log("QQQQQQQ",flight))
          flightsState.push(response.data.flights)
          if (flightsState.length) {
            const userFlights = flightsState
            const userFlightsString = JSON.stringify(flightsState)

           await AsyncStorage.setItem('current_user_flights', userFlightsString)
              .then(() => {
                console.log('Data successfully saved___')
                //return AsyncStorage.getItem('current_user_flights')
              })
              .then(currentUserFlights => {})
              .catch(error => {
                console.error(error)
              })
          }

          if (response.data.status) {
            // alert(response.data.message)
            console.log("alert",response.data.message)
          }
        } catch (error) {
          console.log('ERROR', error)
        }
      }
      searchReservations(user)
      console.log('flightsStateReducer', flightsState)

      return state

    case 'UPDATE_USER_FLIGHTS':
      console.log('action.payload.flights', action.payload.flights)
      return action.payload.flights

    default:
      return state
  }
}
