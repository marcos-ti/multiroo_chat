/* Exportando uma rota ( que vem de consign .into(app);) */
module.exports = function(application){
    // Caso a requisicao va pra index, faz a funcao abaixo
    application.get('/', function(req, res){
        res.render('index');
    });
}