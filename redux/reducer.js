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
    case 'ADD_DESTINATION':
      console.log(action.payload)
      const newState = [...state]

      newState[0].destination.country = action.payload.country
      newState[0].destination.capital = action.payload.capital
      newState[0].destination.code = action.payload.code
      return newState
    case 'ADD_ORIGIN':
      return
    case 'ADD_DATE':
      return
    case 'ADD_PASSENGERS':
      return
    default:
      return state
  }
}
