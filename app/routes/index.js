//arquivos index.js que importa app que vem do consign e mudamos para 'application' aqui
module.exports = (application) => {
    application.get('/', (req, res) => {
        application.app.controllers.index.home(application, req, res);
    
    });
}