//arquivos index.js que importa app que vem do consign e mudamos para 'application' aqui
module.exports = (application) => {
    application.get('/', function(req, res){
        res.send('testando servidor')
    
    });
}