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
      return
    case 'ADD_DATE':
      return
    case 'ADD_PASSENGERS':
      const newStatePassengers = [...state];
      newStatePassengers[0].passengers = action.payload.passengers;
      return newStatePassengers;
    
    default:
      return state
  }
}
