const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const BookingSchema = new Schema({
//   countryOrigin: String,
//   capitalOrigin: String,
//   codeOrigin: String,
//   countryDestination: String,
//   countryDestination: String,
//   codeDestination: String,
//   date: Date,
//   passengers: Number
// })

const BookingSchema = new Schema({
  nombre: String
})

const Booking = mongoose.model('booking', BookingSchema)
module.exports = Booking
