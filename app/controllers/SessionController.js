module.exports = {    
    async create(req, res){
        const user = req.query.user;
        const password = req.query.password;
        console.log(user);
        console.log(password);

        if(req.query.user == "\"syscoin\"" && req.query.password == "\"meEscolhe\""){
            return res.status(200).json({ "mensagem": "Meu nome completo é Moacir Mascarenha Soares Junior. Eu quero essa vaga!"});
        }
        else{
            return res.status(401).json({ "mensagem": "Credenciais erradas."});
        }
       
        
    }
}
