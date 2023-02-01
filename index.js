const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const PORT = 3000
const uri = "mongodb+srv://admin:8183@fso2022.2bqdt3g.mongodb.net/UserDB?retryWrites=true&w=majority"
mongoose.set('strictQuery', true)
const User = require('./models/user')

//DB connection
mongoose.connect(uri).then(result=>{
    console.log("Connected to MongoDB")
})

//Local Server connection
app.listen(PORT,()=>{
    console.log("Server running on port",PORT)
})

app.get('/', (request, response) => {
    User.find({}).then(users => {
      response.json({
        alert: `There are ${users.length} users registered`
      })
    })
  })


app.post('/api/users/signup',(request,response)=>{
    let name=request.body.name
    let email=request.body.email
    let password=request.body.password
    console.log(name,email,password)

    if (name===''||email === '' || password === '') {
        response.status(404).json({
          status: 'FAILED',
          message: 'Empty input fields!'
        })
      } else{
        response.status(201).json({
            status: 'OK',
            message: 'User Created'
          })
      }
})

app.post('/api/users/reservations',(request,response)=>{
   let req=request.body
   console.log("req",req)
   if (!req) {
    response.status(404).json({
      status: 'FAILED',
      message: 'Empty input fields!'
    })
  } else{
    response.status(201).json({
        status: 'OK',
        message: 'Reservation created!'
      })
  }
})