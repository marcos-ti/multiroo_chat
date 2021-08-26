/* Exportando uma rota ( que vem de consign .into(app);) */
module.exports = function(application){
   
    application.get('/', function(req, res){
        // Navegando ate o controller (objeto do express.caminho)
        // o segundo .home é uma funcao interna do express
        // Os parametros application, req, res , vem do controller
        application.app.controllers.index.home(application, req, res);
    });
}