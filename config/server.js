/* Importar o modulo do framework express */
var express = require('express');

/* Importar o modulo do Consign */
var consign = require('consign');

/* Importar o modulo do body-parser* Descontinuado */
var bodyParser = require('body-parser');

/* Importar o modulo do express-validator */
var expressValidator = require('express-validator');

/* Iniciar o objeto do express */
var app = express();

/* Setar as variaveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* Configurar o middleware express.static  */
app.use(express.static('./app/public'));

/* Configurar o middleware body-parser */
app.use(bodyParser.urlencoded({extended: true}));
/*app.use(express.urlencoded({extended:true}));*/

/* Configurar o middleware express-validator */
app.use(expressValidator());

/* Configurar o consign para fazer o autoload das rotas, modulos e controllers para o objeto app */
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

/* Exportando o objeto app para parametrizacao do servidor app.js */
module.exports = app;