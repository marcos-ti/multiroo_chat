/* Exportando uma rota ( que vem de consign .into(app);) */
module.exports = function(application){
    // Requisicao via post
    application.post('/chat', function(req, res){
        res.render('chat');
    });

    // Requisicao via get
    application.get('/chat', function(req, res){
        res.render('chat');
    });
}