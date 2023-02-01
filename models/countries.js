const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
  name_en: String,
  capital_en: String,
  code_3: String
});

const Country = mongoose.model('Country', CountrySchema);

module.exports = Country;
