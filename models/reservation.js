const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReservationSchema = new Schema({
  countryOrigin: String,
  capitalOrigin: String,
  codeOrigin: String,
  countryDestination: String,
  countryDestination: String,
  codeDestination: String,
  date: Date,
  passengers: Number
})



const Reservation = mongoose.model('reservations', BookingSchema)
module.exports = Reservation
