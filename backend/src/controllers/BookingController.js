// Métodos padrões de MVC
// index, show, store, update, destroy

// Cria uma reserva para um usário logado, baseando-se em um Spot existente no banco de dados.
const Booking = require('../models/Booking');

module.exports = {
    async store(req, res) {
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;

        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date,
        });

        // Obtem os dados do usuário e do spot no DB e popula no JSON retornado
        await booking.populate('user');
        await booking.populate('spot');
        // await booking.populate(spot, {path:"spot"});
        return res.json(booking);
    }
};