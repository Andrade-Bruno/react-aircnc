const multer = require('multer')
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        // Com path.resolve() em vez de separarmos o diretório com '/', usamos a vírgula.
        // Isso devido ao fato de o Windows tem seus diretórios com a barra invertida ('\')
        filename: (req, file, callback) => {
            const extension = path.extname(file.originalname);
            const name = path.basename(file.originalname, extension);
            callback(null, `${name}-${Date.now()}${extension}`);
                // null = tratamento de erros, no caso, obsoleto
                // Date.now() evita o upload de imagens com mesmo nome
                // path.basename() tem o objetivo de coletar o nome do arquivo
                // path.extname() tem o objetivo de coletar a extensão do arquivo
        },
    }),
};