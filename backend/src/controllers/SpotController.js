// Métodos padrões de MVC
// index, show, store, update, destroy

// Cria um spot no banco de dados
const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const {tech} = req.query;

        const spots = await Spot.find({ techs: tech });

        return res.json(spots);
    },

    async store(req, res) {
        const {filename} = req.file;
        const {company, techs, price} = req.body;
        const {user_id} = req.headers;
        
        const user = await User.findById(user_id);

        if (!user) { // Se o usuário não existir
            return res.status(400).json({ error: 'O usuário não existe'}) // Status 400 = problema na requisição do usuário
        };

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price,
            // split(',') corta as virgulas da string techs, transformando-a em array, pois o banco de dados considera techs como array
            // map() percorre a string e trim() remove os espaços no incio e no fim da string, se existirem
        })
        return res.json(spot);
    }
}