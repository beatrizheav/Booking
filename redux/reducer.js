// Destino, origen, fecha, pasajeros
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
    passengers: ''
  }
]

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
      newState[0].destination.country = action.payload.country
      newState[0].destination.capital = action.payload.capital
      newState[0].destination.code = action.payload.code
      return newStateDestination
    case 'ADD_DATE':
      
      const newStateDate = [...state]
      newStateDate[0].date = action.payload.date
      
      return newStateDate
    case 'ADD_PASSENGERS':
      const newStatePassengers = [...state]
      newStatePassengers[0].passengers = action.payload.passengers
      return newStatePassengers
    
    default:
      return state
  }
}
