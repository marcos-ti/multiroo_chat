/* Exportando uma rota ( que vem de consign .into(app);) */
module.exports = function(application){
    // Requisicao via post
    application.post('/chat', function(req, res){
        application.app.controllers.chat.iniciaChat(application, req, res);
    });

    // Requisicao via get
    application.get('/chat', function(req, res){
        application.app.controllers.chat.iniciaChat(application, req, res);
    });
}