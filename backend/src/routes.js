const express = require('express');

const multer = require('multer');
const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig);

const routes = express.Router();


const SessionController = require('./controllers/SessionController')
routes.post('/sessions', SessionController.store);

const SpotController = require('./controllers/SpotController')
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);


module.exports = routes;