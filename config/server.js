//módulos
//importar o modulo do framework express
let express = require('express')

//importar o modulo consigno do framework
let consign = require('consign')

//importar o modulo body-parser
let bodyParser = require('body-parser')

// importar o modulo do express validators
let expressvalidator = require('express-validator')

// iniciar o objeto do express validator
let app = express()

//setar as variaveis 'view engine' e 'views' do express
app.set('view engine', 'ejs')
app.set('views', './app/views')

//midlewares:
//configurar middleware express.static 
app.set(express.static('./app/public'))

//configurar o middleware body-Parser
app.use(bodyParser.urlencoded({extended : true}))

// configurar o middleware express-validator
app.use(expressvalidator())

//executando a função do consign que efetua o autoload das rotas dos models e dos controllers para o objeto app
consign()
    .include('/app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

//precisamos exportar o objeto 'app' para o require funcionar /config/server
module.exports = app 


