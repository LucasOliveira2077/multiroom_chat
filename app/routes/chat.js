//arquivos index.js que importa app que vem do consign e mudamos para 'application' aqui
module.exports = (application) => {
    application.post('/chat', function(req, res){
        application.app.controllers.chat.iniciaChat(application, req, res);
    
    });
 
    application.get('/chat', function(req, res){
        application.app.controllers.chat.iniciaChat(application, req, res);
    
    });

}