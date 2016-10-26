module.exports = function(app){
    app.get('/api/teste', app.controllers.teste.teste);
}