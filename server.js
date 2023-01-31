const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3000
const uri = "mongodb+srv://admin:8183@fso2022.2bqdt3g.mongodb.net/UserDB?retryWrites=true&w=majority"
const Booking = require('./models/booking')
const User = require('./models/user')

const cors = require('cors')
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const corsOptions = {
  origin: '*'
}

mongoose.connect(uri).then(result => console.log("Connected to MongoDB"))

app.get('/', (request, response) => {
  User.find({}).then(users => {
    response.json({
      alert: `There are ${users.length} users registered`
    })
  })
})

app.get('/api/users', (request, response) => {
  User.find({}).then(users => {
    response.json(users)
  })
})

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) })
