/* Criando funcao que sera exportada no require desse modulo */
// .home = funcao interna do express
module.exports.home = function(application, req, res){
    res.render('index');
}