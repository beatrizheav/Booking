const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReservationSchema = new Schema({
  destinationCountry: String,
  destinationCapital: String,
  destinationCode: String,
  originCountry: String,
  originCapital: String,
  originCode: String,
  date: Date,
  passengers: Number,
  user:String
})

const Reservation = mongoose.model('reservations', ReservationSchema)
module.exports = Reservation
