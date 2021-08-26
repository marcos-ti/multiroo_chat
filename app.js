// Parametrizacao de requisicoes
/* Importar as configuracoes do servidor */
var app = require('./config/server');

/* Parametrizar a porta de escuta */
app.listen(80, function(){
    console.log('Servidor online');
})