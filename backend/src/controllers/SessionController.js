// Métodos padrões de MVC
// index, show, store, update, destroy

// Cria uma sessão de usuário
const User = require('../models/User')

module.exports = {
    async store(req, res) { 
        const { email } = req.body;

        // Busca no banco de dados se há email já cadastrado
        let user = await User.findOne({ email });
        // Cria o usuário salvando seu email
        if (!user) {
            user = await User.create({ email });
        }
        
        return res.json(user);
    }
};