module.exports.iniciaChat = (application, req, res) => {

    let dadosForm = req.body;

    req.assert('apelido', 'nome ou apelidp é obrigatorio').notEmpty();
    req.assert('apelido', 'nome ou apelido deve conter entre 3 e 15 caractéres').len(3, 15);

    let erros = req.validationErrors();

    if(erros){
        res.render("index", {validacao : erros}) 
        return
    }

    res.render("chat")


}