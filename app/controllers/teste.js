module.exports = function(app){
    return {
        teste: function(req, res){
            if(req.isAuthenticated()){
                res.json({teste: req.user});
            } else {
                res.send("Usuário não logado");
            }
        }
    };
}