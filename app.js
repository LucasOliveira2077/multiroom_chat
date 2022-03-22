//no arquivo app criamos a variavel para fazer o require do module de server
let app = require('./config/server')

//parametrizamos a porta de escuta padrao dos navegadores
app.listen(80, () => {
    console.log('servidor ligado')
})