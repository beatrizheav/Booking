import axios from 'axios'
import { useNavigation } from '@react-navigation/native'

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

export const createReservation = {
  type: 'CREATE_RESERVATION'
}

export const getReservation = {
  type: 'GET_RESERVATION'
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
    count: 0
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

export const userInformationReducer = (state = user, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      console.log('estoy en el reducer')
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
            'http://192.168.11.100:3000/api/users',
            objectToCreate
          )
          console.log('responseFront:', response.data)
          if (response.data.status) {
            console.log(
              response.data.message,
              'MESSAGE',
              newStateUser[0].status
            )
            alert(response.data.message)
          }
        } catch (error) {
          console.log('ERROR', error)
        }
      }
      createUserInDB(object)
      return newStateUser

    case 'LOGIN_USER':
      const navigation = useNavigation()
      const email = action.payload.user.email
      const objectToSearch = {
        email: action.payload.user.email,
        password: action.payload.user.password
      }
      console.log('estoy en el reducer login', objectToSearch)

      async function searchUserInDB (objectToSearch) {
        console.log('estoy en la funcion')
        try {
          const response = await axios.post(
            'http://192.168.11.100:3000/api/users/login',
            objectToSearch
          )
          console.log('responseFront:', response.data)
          if (response.data.status === 'FAILED') {
            alert(response.data.message)
          } else if (response.data.status === 'OK') {
            //ir a booking
          }
        } catch (error) {
          console.log('ERROR', error)
        }
      }
      searchUserInDB(objectToSearch)
      const newLoginUser = [...state]
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

      async function createReservation (reservationToCreate) {
        try {
          const response = await axios.post(
            'http://192.168.11.100:3000/api/users/reservations',
            reservationToCreate
          )
          console.log('responseFront:', response.data)
          if (response.data.status) {
            alert(response.data.message)
          }
        } catch (error) {
          console.log('ERROR', error)
        }
      }

      createReservation(reservationToCreate)

    default:
      return state
  }
}

const flightList = []
export const flightsReducer = (state = flightList, action) => {
  switch (action.type) {
    case 'GET_RESERVATION':
      const flightsState = [...state]
      console.log('Estoy en get reservation')
      axios
        .get('http://192.168.11.100:3000/api/users/reservations')
        .then(result => {
          console.log('RESULT_FLIGHTS')
          flightsState.push(result.data)
        })

      console.log('flightsState', flightsState)

      return flightsState

    default:
      return state
  }
}
