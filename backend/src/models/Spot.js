const mongoose = require('mongoose')

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        // Salva o ID do usuário que criou o Spot de determinada empresa
        type: mongoose.Schema.Types.ObjectId,
        // Refenrecia ao model User, admnistrado pelo SessionController
        ref: 'User',
    }
});

module.exports = mongoose.model('Spot', SpotSchema)