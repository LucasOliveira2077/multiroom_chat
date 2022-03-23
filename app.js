//no arquivo app criamos a variavel para fazer o require do module de server
let app = require('./config/server')

//parametrizamos a porta de escuta padrao dos navegadores
let server = app.listen(80, () => {
    console.log('servidor ligado')
})

let io = require('socket.io').listen(server);

//criar uma conexão pro websocket setando uma variavel io para o cliente receber o websocket
io.on('connection', (socket) =>{
    console.log('usuário conectou')

    socket.on('disconnect', () =>{
        console.log('O usuário desconectou')

    })
}) 