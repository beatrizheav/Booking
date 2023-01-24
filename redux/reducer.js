// Destino, origen, fecha, pasajeros
export const addDestination = {
  type: 'ADD_DESTINATION',
};

export const addOrigin = {
  type: 'ADD_ORIGIN',
};

export const addDate = {
  type: 'ADD_DATE',
};

export const addPassengers = {
  type: 'ADD_PASSENGERS',
};

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


let modificatedState = [...initialState];

export const flightInformationReducer = (state = modificatedState, action) => {
  switch (action.type) {
    case 'ADD_DESTINATION':
      
      modificatedState[0].destination.country = action.payload.country
      modificatedState[0].destination.capital = action.payload.capital
      modificatedState[0].destination.code = action.payload.code

      // console.log("Datos", action.payload.country)
      console.log("paisseleccionado", modificatedState[0].destination.country)
      console.log("paisseleccionado",  modificatedState[0].destination.capital)
      console.log("paisseleccionado", modificatedState[0].destination.code)

      return modificatedState
    case 'ADD_ORIGIN':
      return
    case 'ADD_DATE':
      return
    case 'ADD_PASSENGERS':
      return
    default:
      return state;
  }
}
