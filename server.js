const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const PORT = 3000
mongoose.set('strictQuery', true)
const User = require('./models/user')
const Country = require('./models/countries')
const Reservation = require('./models/reservation')

mongoose
  .connect(process.env.MONGODB_URI)
  .then(result => {
    console.log('Connected to MongoDb')
    app.listen(PORT, () => {
      console.log('Server running on port', PORT)
    })
  })
  .catch(error => console.log(error))

//To check the server users:
app.get('/', (request, response) => {
  User.find({}).then(users => {
    response.json({
      alert: `There are ${users.length} users registered`
    })
  })
})

//To check the server reservation:
app.get('/reservations', (request, response) => {
  Reservation.find({}).then(users => {
    response.json({
      alert: `There are ${users.length} reservations`
    })
  })
})

//To retrieve all the countries
app.get('/api/countries', (request, response) => {
  Country.find({}).then(countries => {
    response.json({
      countries
    })
  })
})

const validatePassword = password => {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&._-])[A-Za-z\d@$!%*#?&._-]{8,}$/.test(
    password
  )
}

const validateEmail = email => {
  return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(
    email
  )
}

//To signUp:
app.post('/api/users', (request, response) => {
  console.log('toy en el server')
  console.log('requestBody', request.body)
  let name = request.body.name
  let email = request.body.email
  let password = request.body.password

  if (name === '' || email === '' || password === '') {
    response.status(404).json({
      status: 'FAILED',
      message: 'Empty input fields!'
    })
  } else if (validateEmail(email) === false) {
    response.json({
      status: 'FAILED',
      message: 'Invalid email address'
    })
  } else if (password.length < 8) {
    console.log(validatePassword(password))

    response.json({
      status: 'FAILED',
      message: 'Password must be at least 8 characters long'
    })
  } else if (validatePassword(password) === true) {
    User.find({ email }).then(result => {
      console.log('result', result)

      if (result.length) {
        response.json({
          status: 'FAILED',
          message: 'User already exists'
        })
      } else {
        const newUser = new User({
          name,
          email,
          password
        })

        newUser
          .save()
          .then(result => {
            response.json({
              status: 'OK',
              message: 'User succesfully created! Please Login',
              data: result
            })
          })
          .catch(error => {
            console.log('error', error)
            response.json({
              status: 'FAILED',
              message: 'Error creating a new account'
            })
          })
      }
    })
  } else {
    console.log(validatePassword(password))
    response.json({
      status: 'FAILED',
      message: 'Password must include letters, numbers and symbols'
    })
  }
})

//To Login
app.post('/api/users/login', (request, response) => {
  console.log('toy en el server LOGIN')
  console.log('REQBODY', request.body.email)
  let email = request.body.email
  let password = request.body.password
  console.log(email, password)

  if (email === '' || password === '') {
    response.json({
      status: 'FAILED',
      message: 'You must fill all the fields to continue'
    })
  } else {
    User.findOne({ email }, (error, user) => {
      if (error) {
        response.json({
          status: 'FAILED',
          message: 'Internal error'
        })
      } else if (user) {
        if (user.password === password) {
          response.json({
            status: 'OK',
            message: 'Successful login'
          })
        } else {
          response.json({
            status: 'FAILED',
            message: 'Wrong password'
          })
        }
      } else {
        response.json({
          status: 'FAILED',
          message: 'The user is not registered'
        })
      }
    })
  }

  // if (email === '' || password === '') {
  //   response.status(404).json({
  //     status: 'FAILED',
  //     message: 'Empty input fields!'
  //   })
  // } else if (password.length < 8) {
  //   response.json({
  //     status: 'FAILED',
  //     message: 'Password is too short'
  //   })
  // } else {
  //   User.find({ email }).then(result => {
  //     console.log('result', result)

  //     if (result.length) {
  //       response.json({
  //         status: 'OK',
  //         message: 'Login correct'
  //       })
  //     } else {
  //       response.json({
  //         status: 'FAILED',
  //         message: 'Login incoprrec',
  //         data: result
  //       })
  //     }
  //   })
  // }
})

//To create a new reservation
app.post('/api/users/reservations', (request, response) => {
  let reservation = request.body
  console.log('SERVER RESERVATIONS', reservation[0])
  console.log('RESERVATION', reservation[0].destination.country)

  let destinationCountry = reservation[0].destination.country
  let destinationCapital = reservation[0].destination.capital
  let destinationCode = reservation[0].destination.code
  let originCountry = reservation[0].origin.country
  let originCapital = reservation[0].origin.capital
  let originCode = reservation[0].origin.code
  let date = reservation[0].date
  let passengers = reservation[0].passengers

  const newReservation = new Reservation({
    destinationCountry,
    destinationCapital,
    destinationCode,
    originCountry,
    originCapital,
    originCode,
    date,
    passengers
  })

  if (
    destinationCountry === '' ||
    destinationCapital === '' ||
    destinationCode === '' ||
    originCountry === '' ||
    originCapital === '' ||
    originCode === '' ||
    date === '' ||
    passengers === ''
  ) {
    response.json({
      status: 'FAILED',
      message: 'There is missing information on the reservation'
    })
  } else {
    const dateToString = new Date(date)

    Reservation.findOne({ date }, (error, reservation) => {
      if (error) {
        response.json({
          status: 'FAILED',
          message: 'Internal error'
        })
      } else if (reservation) {
        response.json({
          status: 'FAILED',
          message: `You already have a reservation for ${date}. You must select another date`
        })
      } else {
        newReservation
          .save()
          .then(result => {
            response.json({
              status: 'OK',
              message: 'Reservation created!'
            })
          })
          .catch(error => {
            console.log('error', error)
            response.json({
              status: 'FAILED',
              message: 'Error creating a new reservation. Try later'
            })
          })
      }
    })
  }
})

//To retrieve reservations from a certain user:
