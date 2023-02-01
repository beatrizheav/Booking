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

mongoose
  .connect(process.env.MONGODB_URI)
  .then(result => {
    console.log('Connected to MongoDb')
    app.listen(PORT, () => {
      console.log('Server running on port', PORT)
    })
  })
  .catch(error => console.log(error))

//To check the server:
app.get('/', (request, response) => {
  User.find({}).then(users => {
    response.json({
      alert: `There are ${users.length} users registered`
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

const ValidatePassword = (password) => {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&._-])[A-Za-z\d@$!%*#?&._-]{8,}$/.test(password)
}

const ValidateEmail = (email) => {
  return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email)
}


//To signUp:
app.post('/api/users/signup', (request, response) => {
  console.log('toy en el server')
  console.log("requestBody", request.body)
  let name = request.body.name
  let email = request.body.email
  let password = request.body.password

  if (name === '' || email === '' || password === '') {
    response.status(404).json({
      status: 'FAILED',
      message: 'Empty input fields!'
    })
  } else if (ValidateEmail(email) === false){
    response.json({
      status: 'FAILED',
      message: 'Invalid email address'
    })
  } else if (password.length < 8) {
    console.log(ValidatePassword(password))

    response.json({
      status: 'FAILED',
      message: 'Password is too short'
    })
  } else if (ValidatePassword(password) === true) {
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
              message: 'Sign Up successful',
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
    console.log(ValidatePassword(password))
    response.json({
      status: 'FAILED',
      message: 'Include numbers and symbols'
    })
  }
})

//To Login
app.post('/api/users/signin', (request, response) => {
  console.log('toy en el server')
  console.log(request.body)
  let email = request.body.email
  let password = request.body.password
  console.log(email, password)

  if (email === '' || password === '') {
    response.status(404).json({
      status: 'FAILED',
      message: 'Empty input fields!'
    })
  } else if (password.length < 8) {
    response.json({
      status: 'FAILED',
      message: 'Password is too short'
    })
  } else {
    User.find({ email }).then(result => {
      console.log('result', result)

      if (result.length) {
        response.json({
          status: 'OK',
          message: 'Login correct'
        })
      } else {
        response.json({
          status: 'FAILED',
          message: 'Login incoprrec',
          data: result
        })
      }
    })
  }
})

//To create a new reservation
app.post('/api/users/reservations', (request, response) => {
  let req = request.body
  let destinationCountry = req.destination.country
  let destinationCapital = req.destination.capital
  let destinationCode = req.destination.code
  let originCountry = req.origin.country
  let originCapital = req.origin.capital
  let originCode = req.origin.code
  let date = req.date
  let passengers = req.passengers

  console.log(
    'req',
    destinationCountry,
    destinationCapital,
    destinationCode,
    originCountry,
    originCapital,
    originCode,
    date,
    passengers
  )

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
    response.status(404).json({
      status: 'FAILED',
      message: 'Empty input fields!'
    })
  } else {
    response.status(201).json({
      status: 'OK',
      message: 'Reservation created!'
    })
  }
})

//To retrieve reservations from a certain user:
