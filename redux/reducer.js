// Destino, origen, fecha, pasajeros, usuarios
import axios from 'axios'

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
    name: "",
    email: "",
    password: ""
  }
]

export const userInformationReducer = (state = user, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      const newStateUser = [...state]
      newStateUser[0].name = action.payload.user.name
      newStateUser[0].email = action.payload.user.email
      newStateUser[0].password = action.payload.user.password
      axios.post('http://localhost:3000/',action.payload.user).then(response=>{
        console.log(response.data)
      })
      return newStateUser

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

    default:
      return state
  }
}
