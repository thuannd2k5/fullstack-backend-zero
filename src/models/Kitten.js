const { default: mongoose } = require("mongoose");

const kittySchema = new mongoose.Schema({
    name: String
});



const Kitten = mongoose.model('ndt', kittySchema);

module.exports = Kitten;
